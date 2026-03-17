# 📖 คำศัพท์ Oxford 3000

เว็บไซต์เรียนคำศัพท์ Oxford 3000 สำหรับเด็กๆ ด้อยโอกาส พร้อม:
- 🔊 คำอ่าน (Phonetic) + เสียงอ่านจริง (Text-to-Speech)
- 🇹🇭 คำแปลภาษาไทย
- 🎵 คำคล้องจองช่วยจำ
- ✏️ ข้อสอบ 4 ตัวเลือก
- 📊 ติดตามความคืบหน้า
- ⭐ บันทึกคำโปรด

## 🚀 วิธี Deploy บน GitHub Pages

### ขั้นตอนที่ 1 – สร้าง Repository ใหม่
1. ไปที่ [github.com](https://github.com) แล้ว Login
2. กด **New repository**
3. ตั้งชื่อ เช่น `oxford-words`
4. เลือก **Public**
5. กด **Create repository**

### ขั้นตอนที่ 2 – อัปโหลดไฟล์
```bash
git init
git add .
git commit -m "🎉 Initial commit - Oxford Words"
git branch -M main
git remote add origin https://github.com/USERNAME/oxford-words.git
git push -u origin main
```

### ขั้นตอนที่ 3 – เปิด GitHub Pages
1. ไปที่ **Settings** ของ Repository
2. เลือก **Pages** (ด้านซ้าย)
3. Source → **GitHub Actions**
4. รอ 1-2 นาที
5. เว็บจะอยู่ที่ `https://USERNAME.github.io/oxford-words/`

## 📁 โครงสร้างไฟล์
```
oxford-vocab/
├── index.html          ← หน้าหลัก
├── manifest.json       ← PWA config
├── css/
│   └── style.css       ← ดีไซน์
├── js/
│   ├── words.js        ← ข้อมูลคำศัพท์ 120+ คำ
│   └── app.js          ← ระบบทั้งหมด
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy
```

## ➕ เพิ่มคำศัพท์ใหม่

แก้ไขไฟล์ `js/words.js` เพิ่มใน array `WORDS`:

```javascript
{ 
  id: 200,                        // ✅ ต้องไม่ซ้ำ
  word: "happy",                   // คำภาษาอังกฤษ
  phonetic: "/ˈhæpi/",            // คำอ่าน IPA
  thai: "มีความสุข",              // คำแปลไทย
  category: "feelings",            // หมวดหมู่
  level: "A1",                     // A1/A2/B1/B2
  rhyme: "มี สุข ยิ้ม แย้ม ทุก วัน", // คำคล้องจอง
  example: "I feel happy.",        // ประโยคตัวอย่าง
  exampleThai: "ฉันมีความสุข",    // แปลประโยค
  rhymeGroup: "y"                  // กลุ่มเสียงสัมผัส
}
```

## 🎨 หมวดหมู่ที่มี
| id | ชื่อ |
|---|---|
| animals | สัตว์ |
| colors | สี |
| food | อาหาร |
| school | โรงเรียน |
| body | ร่างกาย |
| nature | ธรรมชาติ |
| family | ครอบครัว |
| home | บ้าน |
| transport | ยานพาหนะ |
| actions | การกระทำ |
| feelings | ความรู้สึก |
| adjectives | คุณศัพท์ |
| time | เวลา |

## 📱 ใช้ออฟไลน์ได้ (PWA)
- กด **Add to Home Screen** บนมือถือ
- ใช้งานได้แม้ไม่มีอินเทอร์เน็ต (หลังโหลดครั้งแรก)

---
Made with ❤️ เพื่อเด็กๆ ด้อยโอกาส
