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
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');
  currentPage = page;
  if (page === 'quiz') initQuiz();
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
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

// Quiz
function initQuiz() {
  const words = getFilteredWords();
  if (words.length < 4) {
    document.getElementById('quiz-area').innerHTML = `
      <div class="quiz-empty">
        <div class="quiz-empty-icon">📚</div>
        <p>ต้องการคำศัพท์อย่างน้อย 4 คำ<br>กรุณาเลือกหมวดหมู่ที่มีคำมากกว่านี้</p>
        <button class="btn-primary" onclick="showPage('home')">ไปเลือกหมวดหมู่</button>
      </div>`;
    return;
  }
  quizState = { words: shuffle([...words]), index: 0, correct: 0, total: 0, answers: [] };
  score = { correct: 0, total: 0, streak: 0, maxStreak: 0 };
  renderQuiz();
}

function renderQuiz() {
  if (!quizState) return;
  const { words, index } = quizState;

  if (index >= Math.min(words.length, 10)) {
    showQuizResult();
    return;
  }

  const word = words[index];
  const allWords = WORDS;
  const wrong = shuffle(allWords.filter(w => w.id !== word.id)).slice(0, 3);
  const options = shuffle([word, ...wrong]);
  const progress = Math.round(((index) / Math.min(words.length, 10)) * 100);
  const quizType = index % 2 === 0 ? 'en-to-th' : 'th-to-en';

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-bar"><div style="width:${progress}%"></div></div>
      <div class="quiz-meta">
        <span>ข้อที่ ${index + 1} / ${Math.min(words.length, 10)}</span>
        <span>✓ ${score.correct} คะแนน</span>
        <span>🔥 ${score.streak} ต่อเนื่อง</span>
      </div>
    </div>

    <div class="quiz-question">
      ${quizType === 'en-to-th' ?
        `<div class="quiz-q-label">คำว่าอะไรในภาษาไทย?</div>
         <div class="quiz-word">${word.word}</div>
         <div class="quiz-phonetic">${word.phonetic}</div>` :
        `<div class="quiz-q-label">คำว่าอะไรในภาษาอังกฤษ?</div>
         <div class="quiz-word th-word">${word.thai}</div>`
      }
    </div>

    <div class="quiz-options">
      ${options.map(opt => `
        <button class="quiz-opt" onclick="checkAnswer(${word.id}, ${opt.id}, this)">
          ${quizType === 'en-to-th' ? opt.thai : opt.word}
        </button>
      `).join('')}
    </div>

    <button class="btn-speak-quiz" onclick="speakWord('${word.word}')">🔊 ฟังเสียง</button>
  `;
}

function checkAnswer(correctId, selectedId, btn) {
  const buttons = document.querySelectorAll('.quiz-opt');
  buttons.forEach(b => b.disabled = true);

  const isCorrect = correctId === selectedId;
  score.total++;
  quizState.total++;

  if (isCorrect) {
    score.correct++;
    score.streak++;
    score.maxStreak = Math.max(score.maxStreak, score.streak);
    quizState.correct++;
    btn.classList.add('correct');
    showQuizFeedback(true);
  } else {
    score.streak = 0;
    btn.classList.add('wrong');
    buttons.forEach(b => {
      const wordData = WORDS.find(w =>
        b.textContent.trim() === w.thai || b.textContent.trim() === w.word
      );
      if (wordData && wordData.id === correctId) b.classList.add('correct');
    });
    showQuizFeedback(false);
  }

  const word = WORDS.find(w => w.id === correctId);
  if (word) {
    setTimeout(() => speakWord(word.word), isCorrect ? 100 : 500);
  }

  setTimeout(() => {
    quizState.index++;
    renderQuiz();
    updateStats();
  }, 1500);
}

function showQuizFeedback(correct) {
  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback ' + (correct ? 'correct' : 'wrong');
  feedback.textContent = correct ? '🎉 ถูกต้อง!' : '😅 ลองใหม่นะ!';
  document.getElementById('quiz-area').appendChild(feedback);
  setTimeout(() => feedback.remove(), 1400);
}

function showQuizResult() {
  const pct = Math.round((quizState.correct / quizState.total) * 100);
  let msg = pct >= 80 ? '🌟 เก่งมากเลย!' : pct >= 60 ? '👍 ทำได้ดี!' : '💪 ฝึกต่อไปนะ!';

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '📚'}</div>
      <div class="result-score">${quizState.correct}/${quizState.total}</div>
      <div class="result-pct">${pct}%</div>
      <div class="result-msg">${msg}</div>
      <div class="result-streak">สถิติต่อเนื่อง: 🔥 ${score.maxStreak}</div>
      <div class="result-btns">
        <button class="btn-primary" onclick="initQuiz()">🔄 ทำใหม่</button>
        <button class="btn-secondary" onclick="continueLearning()">📚 เรียนต่อ</button>
      </div>
    </div>
  `;
}

function continueLearning() {
  // อยู่หน้า quiz เหมือนเดิม แล้วสุ่มชุดคำถามใหม่
  currentPage = 'quiz';
  initQuiz();
}

function startQuizForWord(id) {
  showPage('quiz');
  // Will init naturally
}

// Utilities
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Keyboard close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('word-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'word-modal') closeModal();
});
