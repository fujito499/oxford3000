// App State
let currentCategory = 'all';
let currentWord = null;
let currentPage = 'home';
let quizState = null;
let score = { correct: 0, total: 0, streak: 0, maxStreak: 0 };
let studiedWords = new Set(JSON.parse(localStorage.getItem('studiedWords') || '[]'));
let favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderWordGrid();
  updateStats();
  showPage('home');
});

function saveProgress() {
  localStorage.setItem('studiedWords', JSON.stringify([...studiedWords]));
  localStorage.setItem('favorites', JSON.stringify([...favorites]));
}

function getFilteredWords() {
  let words;

  if (currentCategory === 'all') {
    words = [...WORDS];
  } else if (currentCategory === 'favorites') {
    words = WORDS.filter(w => favorites.has(w.id));
  } else {
    words = WORDS.filter(w => w.category === currentCategory);
  }

  const levelOrder = {
    A1: 1,
    A2: 2,
    B1: 3,
    B2: 4,
    C1: 5,
    C2: 6
  };

  return words.sort((a, b) => {
    const levelDiff = (levelOrder[a.level] || 999) - (levelOrder[b.level] || 999);
    if (levelDiff !== 0) return levelDiff;

    return a.word.localeCompare(b.word, 'en', { sensitivity: 'base' });
  });
}

function updateStats() {
  const total = WORDS.length;
  const studied = studiedWords.size;
  const pct = Math.round((studied / total) * 100);
  document.getElementById('stat-studied').textContent = studied;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-percent').textContent = pct + '%';
  document.getElementById('stat-streak').textContent = score.maxStreak;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = pct + '%';
}

// Page Navigation
function showPage(page, skipQuizInit = false) {
  const previousPage = currentPage;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');

  currentPage = page;

  if (page === 'quiz' && !skipQuizInit && previousPage !== 'quiz') {
    initQuiz();
  }
}

// Categories
function renderCategories() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'all' ? WORDS.length :
                  cat.id === 'favorites' ? favorites.size :
                  WORDS.filter(w => w.category === cat.id).length;
    return `<button class="cat-btn ${currentCategory === cat.id ? 'active' : ''}"
      onclick="selectCategory('${cat.id}')"
      style="--cat-color: ${cat.color}">
      <span class="cat-emoji">${cat.emoji}</span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-count">${count}</span>
    </button>`;
  }).join('') + `<button class="cat-btn ${currentCategory === 'favorites' ? 'active' : ''}"
      onclick="selectCategory('favorites')"
      style="--cat-color: #f43f5e">
      <span class="cat-emoji">⭐</span>
      <span class="cat-name">ที่ชอบ</span>
      <span class="cat-count">${favorites.size}</span>
    </button>`;
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderWordGrid();
}

// Word Grid
function renderWordGrid(searchQuery = '') {
  const words = getFilteredWords().filter(w => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return w.word.toLowerCase().includes(q) || w.thai.includes(q);
  });

  const grid = document.getElementById('word-grid');
  const countEl = document.getElementById('word-count');
  if (countEl) countEl.textContent = `${words.length} คำ`;

  if (words.length === 0) {
    grid.innerHTML = '<div class="empty-state">🔍 ไม่พบคำศัพท์ที่ค้นหา</div>';
    return;
  }

  grid.innerHTML = words.map(w => `
    <button class="word-card ${studiedWords.has(w.id) ? 'studied' : ''} ${favorites.has(w.id) ? 'favorited' : ''}"
      onclick="openWordDetail(${w.id})">
      <div class="wc-top">
        <span class="wc-level level-${w.level.toLowerCase()}">${w.level}</span>
        ${favorites.has(w.id) ? '<span class="wc-star">⭐</span>' : ''}
        ${studiedWords.has(w.id) ? '<span class="wc-check">✓</span>' : ''}
      </div>
      <div class="wc-word">${w.word}</div>
      <div class="wc-phonetic">${w.phonetic}</div>
      <div class="wc-thai">${w.thai}</div>
    </button>
  `).join('');
}

// Search
document.getElementById('search-input')?.addEventListener('input', (e) => {
  renderWordGrid(e.target.value);
});

// Word Detail Modal
function openWordDetail(id) {
  const word = WORDS.find(w => w.id === id);
  if (!word) return;
  currentWord = word;
  studiedWords.add(word.id);
  saveProgress();
  updateStats();

  const modal = document.getElementById('word-modal');
  const cat = CATEGORIES.find(c => c.id === word.category);
  const isFav = favorites.has(word.id);

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header" style="background: linear-gradient(135deg, ${cat?.color || '#6366f1'}22, ${cat?.color || '#6366f1'}11)">
      <div class="modal-cat">${cat?.emoji || '📚'} ${cat?.name || word.category}</div>
      <div class="modal-level level-${word.level.toLowerCase()}">${word.level}</div>
    </div>
    <div class="modal-body">
      <div class="modal-word-row">
        <h1 class="modal-word">${word.word}</h1>
        <button class="btn-speak" onclick="speakWord('${word.word}')" title="ฟังเสียง">
          🔊
        </button>
        <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite(${word.id})" title="เพิ่มในที่ชอบ">
          ${isFav ? '⭐' : '☆'}
        </button>
      </div>
      <div class="modal-phonetic">${word.phonetic}</div>
      <div class="modal-thai">${word.thai}</div>

      <div class="modal-section rhyme-section">
        <div class="section-label">🎵 คำคล้องจอง</div>
        <div class="rhyme-box">${word.rhyme}</div>
      </div>

      <div class="modal-section example-section">
        <div class="section-label">💬 ประโยคตัวอย่าง</div>
        <div class="example-en">${word.example}</div>
        <div class="example-th">${word.exampleThai}</div>
      </div>

      <div class="modal-actions">
        <button class="btn-primary" onclick="speakWord('${word.word}')">🔊 ฟังเสียง</button>
        <button class="btn-quiz-this" onclick="closeModal(); startQuizForWord(${word.id})">📝 ทดสอบคำนี้</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('word-modal').classList.remove('open');
  document.body.style.overflow = '';
  renderWordGrid(document.getElementById('search-input')?.value || '');
  renderCategories();
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  saveProgress();
  openWordDetail(id);
  renderCategories();
}

// Text-to-Speech
function speakWord(word) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.65;
    utterance.pitch = 1.1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

// Quiz
const QUIZ_BATCH_SIZE = 10;
const QUIZ_POOL_KEY = 'quizPool_v4';

function saveQuizPool(pool) {
  const allIds = WORDS.map(w => w.id).sort((a, b) => a - b);
  localStorage.setItem(QUIZ_POOL_KEY, JSON.stringify({
    ...pool,
    allIds
  }));
}

function createFreshQuizPool(completedCycles = 0) {
  return {
    allIds: WORDS.map(w => w.id).sort((a, b) => a - b),
    remainingIds: shuffle(WORDS.map(w => w.id)),
    completedCycles
  };
}

function loadQuizPool() {
  const saved = JSON.parse(localStorage.getItem(QUIZ_POOL_KEY) || 'null');
  const currentIds = WORDS.map(w => w.id).sort((a, b) => a - b);

  if (
    !saved ||
    !Array.isArray(saved.remainingIds) ||
    JSON.stringify(saved.allIds || []) !== JSON.stringify(currentIds)
  ) {
    const fresh = createFreshQuizPool(0);
    saveQuizPool(fresh);
    return fresh;
  }

  return saved;
}

function takeNextQuizBatch() {
  let pool = loadQuizPool();

  if (pool.remainingIds.length === 0) {
    pool = createFreshQuizPool((pool.completedCycles || 0) + 1);
  }

  const batchSize = Math.min(QUIZ_BATCH_SIZE, pool.remainingIds.length);
  const batchIds = pool.remainingIds.slice(0, batchSize);
  pool.remainingIds = pool.remainingIds.slice(batchSize);

  saveQuizPool(pool);

  return batchIds
    .map(id => WORDS.find(w => w.id === id))
    .filter(Boolean);
}

function buildQuestion(word) {
  const quizType = Math.random() < 0.5 ? 'en-to-th' : 'th-to-en';
  const wrongOptions = shuffle(WORDS.filter(w => w.id !== word.id)).slice(0, 3);
  const options = shuffle([word, ...wrongOptions]).map(w => w.id);

  return {
    wordId: word.id,
    quizType,
    optionIds: options
  };
}

function createQuizState(batchWords) {
  return {
    words: batchWords,
    questions: batchWords.map(buildQuestion),
    index: 0,
    correct: 0,
    total: batchWords.length,
    answers: Array(batchWords.length).fill(null)
  };
}

function initQuiz(customBatch = null) {
  if (WORDS.length < 4) {
    document.getElementById('quiz-area').innerHTML = `
      <div class="quiz-empty">
        <div class="quiz-empty-icon">📚</div>
        <p>ต้องมีคำศัพท์อย่างน้อย 4 คำก่อนเริ่มควิซ</p>
        <button class="btn-primary" onclick="showPage('home')">กลับหน้าหลัก</button>
      </div>
    `;
    return;
  }

  const batchWords = customBatch || takeNextQuizBatch();

  if (!batchWords.length) {
    document.getElementById('quiz-area').innerHTML = `
      <div class="quiz-empty">
        <div class="quiz-empty-icon">🎉</div>
        <p>ตอนนี้ครบทุกคำแล้ว<br>กดเริ่มใหม่เพื่อสุ่มรอบใหม่</p>
        <button class="btn-primary" onclick="initQuiz()">เริ่มรอบใหม่</button>
      </div>
    `;
    return;
  }

  quizState = createQuizState(batchWords);
  score = { correct: 0, total: 0, streak: 0, maxStreak: 0 };

  renderQuiz();
}

function renderQuiz() {
  if (!quizState) return;

  const totalQuestions = quizState.questions.length;
  const currentIndex = quizState.index;
  const question = quizState.questions[currentIndex];
  const word = WORDS.find(w => w.id === question.wordId);
  const currentAnswer = quizState.answers[currentIndex];
  const answeredCount = quizState.answers.filter(Boolean).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);
  const pool = loadQuizPool();

  if (!word) return;

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-bar">
        <div style="width:${progress}%"></div>
      </div>
      <div class="quiz-meta">
        <span>ข้อที่ ${currentIndex + 1} / ${totalQuestions}</span>
        <span>ตอบแล้ว ${answeredCount} / ${totalQuestions}</span>
        <span>เหลืออีก ${pool.remainingIds.length} คำก่อนวนซ้ำ</span>
      </div>
    </div>

    <div class="quiz-question">
      ${
        question.quizType === 'en-to-th'
          ? `
            <div class="quiz-q-label">คำนี้ภาษาไทยคืออะไร?</div>
            <div class="quiz-word">${word.word}</div>
            <div class="quiz-phonetic">${word.phonetic}</div>
          `
          : `
            <div class="quiz-q-label">คำนี้ภาษาอังกฤษคืออะไร?</div>
            <div class="quiz-word th-word">${word.thai}</div>
          `
      }
    </div>

    <div class="quiz-audio-row">
      <button class="btn-secondary" onclick="speakWord('${word.word}')">🔊 ฟังคำ</button>
      <button class="btn-secondary" onclick="stopSpeaking()">⏹️ หยุดเสียง</button>
    </div>

    <div class="quiz-options">
      ${question.optionIds.map(optionId => {
        const optionWord = WORDS.find(w => w.id === optionId);
        if (!optionWord) return '';

        const label = question.quizType === 'en-to-th' ? optionWord.thai : optionWord.word;

        let extraClass = '';
        let disabled = '';

        if (currentAnswer) {
          disabled = 'disabled';

          if (optionId === word.id) {
            extraClass += ' correct';
          }

          if (currentAnswer.selectedId === optionId && optionId !== word.id) {
            extraClass += ' wrong';
          }
        }

        return `
          <button
            class="quiz-opt${extraClass}"
            ${disabled}
            onclick="checkAnswer(${word.id}, ${optionId})"
          >
            ${label}
          </button>
        `;
      }).join('')}
    </div>

    ${
      currentAnswer
        ? `
          <div class="quiz-inline-feedback ${currentAnswer.isCorrect ? 'correct' : 'wrong'}">
            ${
              currentAnswer.isCorrect
                ? '🎉 ถูกต้อง!'
                : question.quizType === 'en-to-th'
                  ? `❌ เฉลย: ${word.thai}`
                  : `❌ เฉลย: ${word.word}`
            }
          </div>
        `
        : ''
    }

    <div class="quiz-nav-row">
      <button
        class="btn-secondary"
        onclick="goPrevQuestion()"
        ${currentIndex === 0 ? 'disabled' : ''}
      >
         ย้อนกลับ
      </button>

      <button class="btn-primary" onclick="goNextQuestion()">
        ${currentIndex === totalQuestions - 1 ? '✅ ดูผลคะแนน' : ' ข้อถัดไป'}
      </button>
    </div>
  `;
}

function checkAnswer(correctId, selectedId) {
  if (!quizState) return;

  const currentIndex = quizState.index;

  if (quizState.answers[currentIndex]) {
    return;
  }

  const isCorrect = correctId === selectedId;

  quizState.answers[currentIndex] = {
    correctId,
    selectedId,
    isCorrect
  };

  quizState.correct = quizState.answers.filter(a => a && a.isCorrect).length;

  score.total++;
  if (isCorrect) {
    score.correct++;
    score.streak++;
    score.maxStreak = Math.max(score.maxStreak, score.streak);
  } else {
    score.streak = 0;
  }

  studiedWords.add(correctId);
  saveProgress();
  updateStats();

  // เพิ่มคำสั่งนี้เพื่อให้ฟังเสียงคำที่ตอบถูก
  const word = WORDS.find(w => w.id === correctId);
  if (word) {
    speakWord(word.word);  // อ่านคำที่ถูกต้องหลังจากเลือกคำตอบ
  }

  renderQuiz();
}

function goPrevQuestion() {
  if (!quizState) return;
  if (quizState.index > 0) {
    quizState.index--;
    renderQuiz();
  }
}

function goNextQuestion() {
  if (!quizState) return;

  const totalQuestions = quizState.questions.length;

  if (quizState.index < totalQuestions - 1) {
    quizState.index++;
    renderQuiz();
    return;
  }

  const firstUnanswered = quizState.answers.findIndex(answer => !answer);

  if (firstUnanswered !== -1) {
    quizState.index = firstUnanswered;
    renderQuiz();
    return;
  }

  showQuizResult();
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function showQuizResult() {
  if (!quizState) return;

  const pct = Math.round((quizState.correct / quizState.total) * 100);
  const pool = loadQuizPool();

  let msg = '💪 ฝึกต่ออีกนิดนะ!';
  if (pct >= 80) msg = '🏆 เก่งมาก!';
  else if (pct >= 60) msg = '⭐ ทำได้ดีมาก!';

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '📚'}</div>
      <div class="result-score">${quizState.correct}/${quizState.total}</div>
      <div class="result-pct">${pct}%</div>
      <div class="result-msg">${msg}</div>
      <div class="result-streak">สถิติต่อเนื่อง: 🔥 ${score.maxStreak}</div>
      <div class="result-streak">เหลืออีก ${pool.remainingIds.length} คำก่อนจะเริ่มวนซ้ำ</div>
      <div class="result-btns">
        <button class="btn-primary" onclick="initQuiz()">🎯 ชุดถัดไป</button>
        <button class="btn-secondary" onclick="showPage('home')">📚 กลับหน้าคำศัพท์</button>
      </div>
    </div>
  `;
}

function startQuizForWord(id) {
  const selectedWord = WORDS.find(w => w.id === id);
  if (!selectedWord) return;

  const extraWords = shuffle(WORDS.filter(w => w.id !== id)).slice(0, QUIZ_BATCH_SIZE - 1);
  const customBatch = [selectedWord, ...extraWords];

  showPage('quiz', true);
  initQuiz(customBatch);
}

// Utilities
function shuffle(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Keyboard close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('word-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'word-modal') closeModal();
});
