const WORDS = [
  // Animals
  { id:1, word:"cat", phonetic:"/kæt/", thai:"แมว", category:"animals", level:"A1", rhyme:"แมว นอน เหนือ เบาะ นุ่ม นาน", example:"The cat is sleeping.", exampleThai:"แมวกำลังนอนหลับ", rhymeGroup:"at" },
  { id:2, word:"dog", phonetic:"/dɒɡ/", thai:"สุนัข", category:"animals", level:"A1", rhyme:"หมา หาง ยาว เคี้ยว กระดูก", example:"My dog is friendly.", exampleThai:"สุนัขของฉันเป็นมิตร", rhymeGroup:"og" },
  { id:3, word:"bird", phonetic:"/bɜːd/", thai:"นก", category:"animals", level:"A1", rhyme:"นก บิน สูง แสน สวย ไกล", example:"The bird sings in the tree.", exampleThai:"นกร้องเพลงบนต้นไม้", rhymeGroup:"ird" },
  { id:4, word:"fish", phonetic:"/fɪʃ/", thai:"ปลา", category:"animals", level:"A1", rhyme:"ปลา ว่าย น้ำ ใส แสน สดชื่น", example:"Fish live in water.", exampleThai:"ปลาอาศัยอยู่ในน้ำ", rhymeGroup:"ish" },
  { id:5, word:"cow", phonetic:"/kaʊ/", thai:"วัว", category:"animals", level:"A1", rhyme:"วัว กิน หญ้า ทุ่ง เขียว ตลอด", example:"The cow eats grass.", exampleThai:"วัวกินหญ้า", rhymeGroup:"ow" },
  { id:6, word:"horse", phonetic:"/hɔːs/", thai:"ม้า", category:"animals", level:"A1", rhyme:"ม้า วิ่ง เร็ว ดั่ง ลม แรง", example:"The horse runs fast.", exampleThai:"ม้าวิ่งเร็ว", rhymeGroup:"orse" },
  { id:7, word:"sheep", phonetic:"/ʃiːp/", thai:"แกะ", category:"animals", level:"A1", rhyme:"แกะ ขนฟู นุ่ม นวล เหมือน เมฆ", example:"The sheep has white wool.", exampleThai:"แกะมีขนสีขาว", rhymeGroup:"eep" },
  { id:8, word:"pig", phonetic:"/pɪɡ/", thai:"หมู", category:"animals", level:"A1", rhyme:"หมู อ้วน กลม กินเก่ง แสน ซน", example:"The pig rolls in mud.", exampleThai:"หมูชอบนอนในโคลน", rhymeGroup:"ig" },
  { id:9, word:"elephant", phonetic:"/ˈelɪfənt/", thai:"ช้าง", category:"animals", level:"A1", rhyme:"ช้าง ใหญ่ โต งวง ยาว แสน น่า รัก", example:"An elephant never forgets.", exampleThai:"ช้างไม่เคยลืม", rhymeGroup:"ant" },
  { id:10, word:"monkey", phonetic:"/ˈmʌŋki/", thai:"ลิง", category:"animals", level:"A1", rhyme:"ลิง ห้อย โหน เด้ง เต้น สนุก", example:"The monkey climbs trees.", exampleThai:"ลิงปีนต้นไม้", rhymeGroup:"ey" },

  // Colors
  { id:11, word:"red", phonetic:"/red/", thai:"สีแดง", category:"colors", level:"A1", rhyme:"แดง ดั่ง ดอกกุหลาบ งาม จริง", example:"The apple is red.", exampleThai:"แอปเปิ้ลสีแดง", rhymeGroup:"ed" },
  { id:12, word:"blue", phonetic:"/bluː/", thai:"สีน้ำเงิน", category:"colors", level:"A1", rhyme:"น้ำเงิน ท้องฟ้า กว้าง ใหญ่ สดใส", example:"The sky is blue.", exampleThai:"ท้องฟ้าสีน้ำเงิน", rhymeGroup:"ue" },
  { id:13, word:"green", phonetic:"/ɡriːn/", thai:"สีเขียว", category:"colors", level:"A1", rhyme:"เขียว ใบไม้ สด ชุ่ม ชื่น ตา", example:"Leaves are green.", exampleThai:"ใบไม้สีเขียว", rhymeGroup:"een" },
  { id:14, word:"yellow", phonetic:"/ˈjeloʊ/", thai:"สีเหลือง", category:"colors", level:"A1", rhyme:"เหลือง ดั่ง แสง ทอง ส่อง สว่าง", example:"The sun is yellow.", exampleThai:"ดวงอาทิตย์สีเหลือง", rhymeGroup:"ow" },
  { id:15, word:"white", phonetic:"/waɪt/", thai:"สีขาว", category:"colors", level:"A1", rhyme:"ขาว ดั่ง หิมะ บริสุทธิ์ ดี งาม", example:"Snow is white.", exampleThai:"หิมะสีขาว", rhymeGroup:"ite" },
  { id:16, word:"black", phonetic:"/blæk/", thai:"สีดำ", category:"colors", level:"A1", rhyme:"ดำ ดั่ง คืน มืด มิด สนิท", example:"The night is black.", exampleThai:"ราตรีมืดดำ", rhymeGroup:"ack" },
  { id:17, word:"orange", phonetic:"/ˈɒrɪndʒ/", thai:"สีส้ม", category:"colors", level:"A1", rhyme:"ส้ม สีสด ชวน ชม แสน งาม", example:"Oranges are orange!", exampleThai:"ส้มสีส้ม!", rhymeGroup:"ange" },
  { id:18, word:"pink", phonetic:"/pɪŋk/", thai:"สีชมพู", category:"colors", level:"A1", rhyme:"ชมพู สดใส หัวใจ เต้น แรง", example:"Her dress is pink.", exampleThai:"ชุดของเธอสีชมพู", rhymeGroup:"ink" },

  // Food
  { id:19, word:"apple", phonetic:"/ˈæpəl/", thai:"แอปเปิ้ล", category:"food", level:"A1", rhyme:"แอปเปิ้ล กรุบ กรอบ หวาน อมฤต", example:"An apple a day is healthy.", exampleThai:"กินแอปเปิ้ลทุกวันดีต่อสุขภาพ", rhymeGroup:"le" },
  { id:20, word:"banana", phonetic:"/bəˈnɑːnə/", thai:"กล้วย", category:"food", level:"A1", rhyme:"กล้วย หวาน นุ่ม ลิ้น ลิงชอบ กิน", example:"Monkeys love bananas.", exampleThai:"ลิงชอบกล้วย", rhymeGroup:"ana" },
  { id:21, word:"bread", phonetic:"/bred/", thai:"ขนมปัง", category:"food", level:"A1", rhyme:"ขนมปัง อบ ใหม่ กลิ่น หอม ชวน กิน", example:"I eat bread for breakfast.", exampleThai:"ฉันกินขนมปังตอนเช้า", rhymeGroup:"ead" },
  { id:22, word:"rice", phonetic:"/raɪs/", thai:"ข้าว", category:"food", level:"A1", rhyme:"ข้าว ร้อน ฉ่ำ หอม อิ่ม ท้อง", example:"We eat rice every day.", exampleThai:"เรากินข้าวทุกวัน", rhymeGroup:"ice" },
  { id:23, word:"milk", phonetic:"/mɪlk/", thai:"นม", category:"food", level:"A1", rhyme:"นม ขาว ขุ่น หวาน มัน แสน อร่อย", example:"Children drink milk.", exampleThai:"เด็กๆ ดื่มนม", rhymeGroup:"ilk" },
  { id:24, word:"water", phonetic:"/ˈwɔːtər/", thai:"น้ำ", category:"food", level:"A1", rhyme:"น้ำ ใส สะอาด ดื่ม ชื่น ชุ่ม คอ", example:"Water is life.", exampleThai:"น้ำคือชีวิต", rhymeGroup:"ater" },
  { id:25, word:"egg", phonetic:"/eɡ/", thai:"ไข่", category:"food", level:"A1", rhyme:"ไข่ กลม มน แดง ใน ขาว นอก", example:"I eat an egg every morning.", exampleThai:"ฉันกินไข่ทุกเช้า", rhymeGroup:"eg" },
  { id:26, word:"cake", phonetic:"/keɪk/", thai:"เค้ก", category:"food", level:"A1", rhyme:"เค้ก หวาน นุ่ม ฟู สุขสันต์ วันเกิด", example:"Happy birthday cake!", exampleThai:"เค้กวันเกิดแสนหวาน", rhymeGroup:"ake" },
  { id:27, word:"soup", phonetic:"/suːp/", thai:"ซุป", category:"food", level:"A1", rhyme:"ซุป ร้อน อุ่น กลิ่น หอม อาหาร", example:"Hot soup warms you up.", exampleThai:"ซุปร้อนทำให้อบอุ่น", rhymeGroup:"oup" },
  { id:28, word:"orange", phonetic:"/ˈɒrɪndʒ/", thai:"ส้ม", category:"food", level:"A1", rhyme:"ส้ม เปรี้ยว หวาน วิตามิน ซี สด", example:"Oranges are full of vitamin C.", exampleThai:"ส้มมีวิตามินซีมาก", rhymeGroup:"ange" },

  // School/Learning
  { id:29, word:"book", phonetic:"/bʊk/", thai:"หนังสือ", category:"school", level:"A1", rhyme:"หนังสือ เปิด อ่าน ฝัน ถึง โลก กว้าง", example:"I love reading books.", exampleThai:"ฉันชอบอ่านหนังสือ", rhymeGroup:"ook" },
  { id:30, word:"pen", phonetic:"/pen/", thai:"ปากกา", category:"school", level:"A1", rhyme:"ปากกา เขียน ฝัน ลงกระดาษ", example:"Write with a pen.", exampleThai:"เขียนด้วยปากกา", rhymeGroup:"en" },
  { id:31, word:"school", phonetic:"/skuːl/", thai:"โรงเรียน", category:"school", level:"A1", rhyme:"โรงเรียน เรียน รู้ สนุก สดใส ทุกวัน", example:"I go to school every day.", exampleThai:"ฉันไปโรงเรียนทุกวัน", rhymeGroup:"ool" },
  { id:32, word:"teacher", phonetic:"/ˈtiːtʃər/", thai:"ครู", category:"school", level:"A1", rhyme:"ครู สอน ดี มีน้ำใจ แสน ดี งาม", example:"My teacher is kind.", exampleThai:"ครูของฉันใจดี", rhymeGroup:"er" },
  { id:33, word:"student", phonetic:"/ˈstjuːdənt/", thai:"นักเรียน", category:"school", level:"A1", rhyme:"นักเรียน ขยัน เรียน เก่ง ฝัน ไกล", example:"The student studies hard.", exampleThai:"นักเรียนเรียนหนัก", rhymeGroup:"ent" },
  { id:34, word:"class", phonetic:"/klɑːs/", thai:"ชั้นเรียน", category:"school", level:"A1", rhyme:"ห้องเรียน สดใส ใฝ่ รู้ ดี งาม", example:"Our class is fun.", exampleThai:"ชั้นเรียนของเราสนุก", rhymeGroup:"ass" },
  { id:35, word:"number", phonetic:"/ˈnʌmbər/", thai:"ตัวเลข", category:"school", level:"A1", rhyme:"ตัวเลข นับ สนุก หนึ่ง สอง สาม", example:"Can you count numbers?", exampleThai:"คุณนับเลขได้ไหม", rhymeGroup:"er" },
  { id:36, word:"letter", phonetic:"/ˈletər/", thai:"ตัวอักษร", category:"school", level:"A1", rhyme:"ตัวอักษร เรียง ราย A B C", example:"The alphabet has 26 letters.", exampleThai:"ตัวอักษรมี 26 ตัว", rhymeGroup:"etter" },
  { id:37, word:"read", phonetic:"/riːd/", thai:"อ่าน", category:"school", level:"A1", rhyme:"อ่าน หนังสือ เรื่อย ๆ รู้ มาก ขึ้น", example:"Read a book today!", exampleThai:"อ่านหนังสือวันนี้เลย!", rhymeGroup:"ead" },
  { id:38, word:"write", phonetic:"/raɪt/", thai:"เขียน", category:"school", level:"A1", rhyme:"เขียน ความ ฝัน ลงกระดาษ สีขาว", example:"Write your name here.", exampleThai:"เขียนชื่อของคุณตรงนี้", rhymeGroup:"ite" },
  { id:39, word:"learn", phonetic:"/lɜːn/", thai:"เรียนรู้", category:"school", level:"A1", rhyme:"เรียน รู้ ทุก วัน สนุก ไม่มี ที่สิ้น สุด", example:"Never stop learning!", exampleThai:"อย่าหยุดเรียนรู้!", rhymeGroup:"earn" },
  { id:40, word:"answer", phonetic:"/ˈɑːnsər/", thai:"คำตอบ", category:"school", level:"A1", rhyme:"คำตอบ ตั้ง ใจ คิด ดี ๆ จะ พบ", example:"Do you know the answer?", exampleThai:"คุณรู้คำตอบไหม?", rhymeGroup:"er" },

  // Body
  { id:41, word:"hand", phonetic:"/hænd/", thai:"มือ", category:"body", level:"A1", rhyme:"มือ สร้าง สรรค์ งาน ดี ด้วย หัวใจ", example:"Wash your hands!", exampleThai:"ล้างมือด้วยนะ!", rhymeGroup:"and" },
  { id:42, word:"eye", phonetic:"/aɪ/", thai:"ตา", category:"body", level:"A1", rhyme:"ตา มอง โลก สวย งาม สดใส", example:"Open your eyes!", exampleThai:"ลืมตาขึ้น!", rhymeGroup:"eye" },
  { id:43, word:"ear", phonetic:"/ɪər/", thai:"หู", category:"body", level:"A1", rhyme:"หู ฟัง เสียง เพลง หวาน ชื่น ใจ", example:"Listen with your ears.", exampleThai:"ฟังด้วยหู", rhymeGroup:"ear" },
  { id:44, word:"mouth", phonetic:"/maʊθ/", thai:"ปาก", category:"body", level:"A1", rhyme:"ปาก พูด ดี มี มนต์ เสน่ห์ งาม", example:"Smile with your mouth.", exampleThai:"ยิ้มด้วยปาก", rhymeGroup:"outh" },
  { id:45, word:"nose", phonetic:"/noʊz/", thai:"จมูก", category:"body", level:"A1", rhyme:"จมูก ดม กลิ่น หอม อาหาร แสน อยาก", example:"Your nose smells.", exampleThai:"จมูกใช้ดมกลิ่น", rhymeGroup:"ose" },
  { id:46, word:"head", phonetic:"/hed/", thai:"หัว", category:"body", level:"A1", rhyme:"หัว คิด ดี ฝัน ไกล ถึง ดาว", example:"Use your head to think.", exampleThai:"ใช้หัวคิด", rhymeGroup:"ead" },
  { id:47, word:"foot", phonetic:"/fʊt/", thai:"เท้า", category:"body", level:"A1", rhyme:"เท้า ก้าว เดิน ไกล ถึง จุด หมาย", example:"Put your best foot forward.", exampleThai:"ก้าวเดินไปข้างหน้า", rhymeGroup:"oot" },
  { id:48, word:"heart", phonetic:"/hɑːt/", thai:"หัวใจ", category:"body", level:"A1", rhyme:"หัวใจ เต้น แรง รัก จริง ไม่มี วัน ดับ", example:"The heart pumps blood.", exampleThai:"หัวใจสูบฉีดเลือด", rhymeGroup:"art" },

  // Nature
  { id:49, word:"sun", phonetic:"/sʌn/", thai:"ดวงอาทิตย์", category:"nature", level:"A1", rhyme:"ดวงอาทิตย์ ส่อง แสง ทอง ส่อง ไกล", example:"The sun rises in the east.", exampleThai:"ดวงอาทิตย์ขึ้นทางทิศตะวันออก", rhymeGroup:"un" },
  { id:50, word:"moon", phonetic:"/muːn/", thai:"ดวงจันทร์", category:"nature", level:"A1", rhyme:"จันทร์ แจ่ม ฟ้า ยาม ค่ำ คืน งาม", example:"The moon shines at night.", exampleThai:"ดวงจันทร์ส่องแสงตอนกลางคืน", rhymeGroup:"oon" },
  { id:51, word:"star", phonetic:"/stɑːr/", thai:"ดาว", category:"nature", level:"A1", rhyme:"ดาว ระยิบ ระยับ สวย บน ฟ้า กว้าง", example:"Stars shine in the sky.", exampleThai:"ดาวส่องแสงบนท้องฟ้า", rhymeGroup:"ar" },
  { id:52, word:"tree", phonetic:"/triː/", thai:"ต้นไม้", category:"nature", level:"A1", rhyme:"ต้นไม้ ใหญ่ โต ร่ม เย็น แสน ดี", example:"Trees give us fresh air.", exampleThai:"ต้นไม้ให้อากาศบริสุทธิ์", rhymeGroup:"ee" },
  { id:53, word:"flower", phonetic:"/ˈflaʊər/", thai:"ดอกไม้", category:"nature", level:"A1", rhyme:"ดอกไม้ บาน สวย งาม กลิ่น หอม ไกล", example:"Flowers smell beautiful.", exampleThai:"ดอกไม้มีกลิ่นหอม", rhymeGroup:"er" },
  { id:54, word:"rain", phonetic:"/reɪn/", thai:"ฝน", category:"nature", level:"A1", rhyme:"ฝน ตก ชุ่ม ชื่น ดิน แผ่น ดิน ดี", example:"The rain waters the plants.", exampleThai:"ฝนรดน้ำต้นไม้", rhymeGroup:"ain" },
  { id:55, word:"wind", phonetic:"/wɪnd/", thai:"ลม", category:"nature", level:"A1", rhyme:"ลม พัด เย็น ชื่น ใจ สดชื่น", example:"The wind blows cool.", exampleThai:"ลมพัดเย็นสบาย", rhymeGroup:"ind" },
  { id:56, word:"cloud", phonetic:"/klaʊd/", thai:"เมฆ", category:"nature", level:"A1", rhyme:"เมฆ ลอย สูง ฟ้า ขาว ฟู ดั่ง ฝ้าย", example:"White clouds float by.", exampleThai:"เมฆขาวลอยผ่าน", rhymeGroup:"oud" },
  { id:57, word:"river", phonetic:"/ˈrɪvər/", thai:"แม่น้ำ", category:"nature", level:"A1", rhyme:"แม่น้ำ ไหล เอื่อย ๆ มา จาก ภูเขา สูง", example:"Fish swim in the river.", exampleThai:"ปลาว่ายในแม่น้ำ", rhymeGroup:"er" },
  { id:58, word:"mountain", phonetic:"/ˈmaʊntɪn/", thai:"ภูเขา", category:"nature", level:"A1", rhyme:"ภูเขา สูง ตระหง่าน ยืน หยัด มั่น คง", example:"Mountains are very tall.", exampleThai:"ภูเขาสูงมาก", rhymeGroup:"ain" },
  { id:59, word:"sea", phonetic:"/siː/", thai:"ทะเล", category:"nature", level:"A1", rhyme:"ทะเล กว้าง ใหญ่ คลื่น ซัด ฝั่ง ไกล", example:"The sea is deep and blue.", exampleThai:"ทะเลลึกและสีน้ำเงิน", rhymeGroup:"ee" },
  { id:60, word:"sky", phonetic:"/skaɪ/", thai:"ท้องฟ้า", category:"nature", level:"A1", rhyme:"ฟ้า กว้าง ไกล สุด ตา แสน สวย งาม", example:"The sky is blue today.", exampleThai:"ท้องฟ้าวันนี้สีฟ้า", rhymeGroup:"y" },

  // Family
  { id:61, word:"mother", phonetic:"/ˈmʌðər/", thai:"แม่", category:"family", level:"A1", rhyme:"แม่ รัก ลูก สุด ใจ จริง ไม่ เคย เปลี่ยน", example:"My mother loves me.", exampleThai:"แม่รักฉัน", rhymeGroup:"er" },
  { id:62, word:"father", phonetic:"/ˈfɑːðər/", thai:"พ่อ", category:"family", level:"A1", rhyme:"พ่อ แข็งแกร่ง ดั่ง ต้นไม้ ใหญ่ โต", example:"My father works hard.", exampleThai:"พ่อทำงานหนัก", rhymeGroup:"er" },
  { id:63, word:"brother", phonetic:"/ˈbrʌðər/", thai:"พี่ชาย/น้องชาย", category:"family", level:"A1", rhyme:"พี่ น้อง รัก กัน ไม่ ลืม ตลอด ไป", example:"My brother is funny.", exampleThai:"พี่ชายของฉันตลก", rhymeGroup:"er" },
  { id:64, word:"sister", phonetic:"/ˈsɪstər/", thai:"พี่สาว/น้องสาว", category:"family", level:"A1", rhyme:"พี่สาว หวาน ใจ ดี น้ำใจ งาม", example:"My sister is kind.", exampleThai:"น้องสาวของฉันใจดี", rhymeGroup:"er" },
  { id:65, word:"baby", phonetic:"/ˈbeɪbi/", thai:"ทารก", category:"family", level:"A1", rhyme:"ทารก น้อย เล็ก น่า รัก หัวใจ ละลาย", example:"The baby is sleeping.", exampleThai:"ทารกกำลังนอนหลับ", rhymeGroup:"y" },
  { id:66, word:"friend", phonetic:"/frend/", thai:"เพื่อน", category:"family", level:"A1", rhyme:"เพื่อน ดี คู่ ใจ ไม่ เคย ทิ้ง กัน", example:"Friends help each other.", exampleThai:"เพื่อนช่วยเหลือกัน", rhymeGroup:"end" },

  // Home
  { id:67, word:"house", phonetic:"/haʊs/", thai:"บ้าน", category:"home", level:"A1", rhyme:"บ้าน อบอุ่น ครอบครัว พัก ผ่อน ร่มเย็น", example:"My house is small but cozy.", exampleThai:"บ้านฉันเล็กแต่อบอุ่น", rhymeGroup:"ouse" },
  { id:68, word:"door", phonetic:"/dɔːr/", thai:"ประตู", category:"home", level:"A1", rhyme:"ประตู เปิด รับ แขก ยิ้ม รับ ทุก คน", example:"Please open the door.", exampleThai:"กรุณาเปิดประตู", rhymeGroup:"oor" },
  { id:69, word:"window", phonetic:"/ˈwɪndoʊ/", thai:"หน้าต่าง", category:"home", level:"A1", rhyme:"หน้าต่าง เปิด รับ ลม เย็น ชื่น ใจ", example:"Look out the window!", exampleThai:"มองออกไปนอกหน้าต่าง!", rhymeGroup:"ow" },
  { id:70, word:"bed", phonetic:"/bed/", thai:"เตียง", category:"home", level:"A1", rhyme:"เตียง นุ่ม นวล นอน หลับ ฝัน ดี", example:"Time to go to bed.", exampleThai:"ถึงเวลานอนแล้ว", rhymeGroup:"ed" },
  { id:71, word:"chair", phonetic:"/tʃeər/", thai:"เก้าอี้", category:"home", level:"A1", rhyme:"เก้าอี้ นั่ง พัก ผ่อน สบาย ดี", example:"Sit on the chair.", exampleThai:"นั่งบนเก้าอี้", rhymeGroup:"air" },
  { id:72, word:"table", phonetic:"/ˈteɪbəl/", thai:"โต๊ะ", category:"home", level:"A1", rhyme:"โต๊ะ วาง อาหาร ร่วม รับ ประทาน กัน", example:"Eat at the table.", exampleThai:"กินอาหารที่โต๊ะ", rhymeGroup:"able" },
  { id:73, word:"kitchen", phonetic:"/ˈkɪtʃɪn/", thai:"ห้องครัว", category:"home", level:"A1", rhyme:"ครัว กลิ่น หอม อาหาร สุก กำลัง รอ", example:"Cooking happens in the kitchen.", exampleThai:"ทำอาหารในห้องครัว", rhymeGroup:"en" },
  { id:74, word:"garden", phonetic:"/ˈɡɑːrdən/", thai:"สวน", category:"home", level:"A1", rhyme:"สวน ดอกไม้ บาน สวย งาม ต้อง ตา", example:"I water my garden every day.", exampleThai:"ฉันรดน้ำสวนทุกวัน", rhymeGroup:"en" },

  // Transport
  { id:75, word:"car", phonetic:"/kɑːr/", thai:"รถยนต์", category:"transport", level:"A1", rhyme:"รถ วิ่ง ไว ตาม ถนน ไกล สุด ลับ ตา", example:"The car goes fast.", exampleThai:"รถยนต์วิ่งเร็ว", rhymeGroup:"ar" },
  { id:76, word:"bus", phonetic:"/bʌs/", thai:"รถบัส", category:"transport", level:"A1", rhyme:"รถ บัส พา ผู้ โดยสาร ไป ถึง ที่ หมาย", example:"Take the bus to school.", exampleThai:"นั่งรถบัสไปโรงเรียน", rhymeGroup:"us" },
  { id:77, word:"train", phonetic:"/treɪn/", thai:"รถไฟ", category:"transport", level:"A1", rhyme:"รถ ไฟ วิ่ง ราง เรียง ราย ไป ข้างหน้า", example:"The train is on time.", exampleThai:"รถไฟตรงเวลา", rhymeGroup:"ain" },
  { id:78, word:"plane", phonetic:"/pleɪn/", thai:"เครื่องบิน", category:"transport", level:"A1", rhyme:"บิน สูง ลิบ เมฆ สีขาว ล้อมรอบ", example:"The plane flies high.", exampleThai:"เครื่องบินบินสูง", rhymeGroup:"ane" },
  { id:79, word:"boat", phonetic:"/boʊt/", thai:"เรือ", category:"transport", level:"A1", rhyme:"เรือ ลอย น้ำ ลม พัด เบา ๆ ชื่น ใจ", example:"The boat sails on the sea.", exampleThai:"เรือแล่นในทะเล", rhymeGroup:"oat" },
  { id:80, word:"bicycle", phonetic:"/ˈbaɪsɪkəl/", thai:"จักรยาน", category:"transport", level:"A1", rhyme:"จักรยาน ปั่น เพลิน ใจ ลม เย็น ชื่น", example:"Ride your bicycle to school.", exampleThai:"ขี่จักรยานไปโรงเรียน", rhymeGroup:"le" },

  // Actions / Verbs A2
  { id:81, word:"run", phonetic:"/rʌn/", thai:"วิ่ง", category:"actions", level:"A1", rhyme:"วิ่ง เร็ว แรง สุด ใจ ไม่ หยุด", example:"I run every morning.", exampleThai:"ฉันวิ่งทุกเช้า", rhymeGroup:"un" },
  { id:82, word:"jump", phonetic:"/dʒʌmp/", thai:"กระโดด", category:"actions", level:"A1", rhyme:"กระโดด สูง ไกล ใจ กล้า ไม่ กลัว", example:"Jump as high as you can!", exampleThai:"กระโดดให้สูงที่สุดเท่าที่ทำได้!", rhymeGroup:"ump" },
  { id:83, word:"swim", phonetic:"/swɪm/", thai:"ว่ายน้ำ", category:"actions", level:"A1", rhyme:"ว่าย น้ำ เย็น ชื่น สดชื่น เหมือน ปลา", example:"Fish swim in the ocean.", exampleThai:"ปลาว่ายน้ำในมหาสมุทร", rhymeGroup:"im" },
  { id:84, word:"sing", phonetic:"/sɪŋ/", thai:"ร้องเพลง", category:"actions", level:"A1", rhyme:"ร้อง เพลง หวาน ชื่น ใจ ทุก คน ยิ้ม", example:"Sing a happy song!", exampleThai:"ร้องเพลงสนุก!", rhymeGroup:"ing" },
  { id:85, word:"dance", phonetic:"/dɑːns/", thai:"เต้น", category:"actions", level:"A1", rhyme:"เต้น รำ สนุก ใจ กาย คล่อง แคล่ว", example:"Dance with joy!", exampleThai:"เต้นด้วยความสุข!", rhymeGroup:"ance" },
  { id:86, word:"play", phonetic:"/pleɪ/", thai:"เล่น", category:"actions", level:"A1", rhyme:"เล่น สนุก เฮฮา ยิ้ม แย้ม แจ่มใส", example:"Children love to play.", exampleThai:"เด็กๆ ชอบเล่น", rhymeGroup:"ay" },
  { id:87, word:"sleep", phonetic:"/sliːp/", thai:"นอนหลับ", category:"actions", level:"A1", rhyme:"นอน หลับ ฝัน ดี กลางคืน ยาว นาน", example:"Sleep well every night.", exampleThai:"นอนหลับพักผ่อนดีๆ ทุกคืน", rhymeGroup:"eep" },
  { id:88, word:"eat", phonetic:"/iːt/", thai:"กิน", category:"actions", level:"A1", rhyme:"กิน อาหาร อร่อย มาก ไม่ อิ่ม", example:"Eat healthy food!", exampleThai:"กินอาหารที่ดีต่อสุขภาพ!", rhymeGroup:"eat" },
  { id:89, word:"drink", phonetic:"/drɪŋk/", thai:"ดื่ม", category:"actions", level:"A1", rhyme:"ดื่ม น้ำ สะอาด ทุก วัน แข็งแรง", example:"Drink water every day.", exampleThai:"ดื่มน้ำทุกวัน", rhymeGroup:"ink" },
  { id:90, word:"smile", phonetic:"/smaɪl/", thai:"ยิ้ม", category:"actions", level:"A1", rhyme:"ยิ้ม หน้า ใส ใจ ดี มี เสน่ห์", example:"Smile and the world smiles back.", exampleThai:"ยิ้มและโลกจะยิ้มตอบ", rhymeGroup:"ile" },

  // Feelings
  { id:91, word:"happy", phonetic:"/ˈhæpi/", thai:"มีความสุข", category:"feelings", level:"A1", rhyme:"มี สุข ยิ้ม แย้ม แจ่มใส ทุก วัน", example:"I feel happy today.", exampleThai:"วันนี้ฉันมีความสุข", rhymeGroup:"y" },
  { id:92, word:"sad", phonetic:"/sæd/", thai:"เศร้า", category:"feelings", level:"A1", rhyme:"เศร้า นิด หน่อย แต่ พรุ่งนี้ ดี กว่า", example:"Don't be sad.", exampleThai:"อย่าเศร้านะ", rhymeGroup:"ad" },
  { id:93, word:"angry", phonetic:"/ˈæŋɡri/", thai:"โกรธ", category:"feelings", level:"A1", rhyme:"โกรธ แค่ น้อย แต่ ให้ อภัย กัน เถอะ", example:"Take a deep breath when angry.", exampleThai:"หายใจลึกๆ ตอนโกรธ", rhymeGroup:"y" },
  { id:94, word:"scared", phonetic:"/skerd/", thai:"กลัว", category:"feelings", level:"A1", rhyme:"กลัว นิด หน่อย แต่ กล้า ยิ่ง กว่า", example:"Don't be scared, be brave.", exampleThai:"อย่ากลัว จงกล้า", rhymeGroup:"ared" },
  { id:95, word:"love", phonetic:"/lʌv/", thai:"รัก", category:"feelings", level:"A1", rhyme:"รัก แท้ ไม่ เคย หมด ตลอด กาล", example:"Love makes the world better.", exampleThai:"ความรักทำให้โลกดีขึ้น", rhymeGroup:"ove" },
  { id:96, word:"kind", phonetic:"/kaɪnd/", thai:"ใจดี", category:"feelings", level:"A1", rhyme:"ใจ ดี แบ่ง ปัน ทุก สิ่ง มี คุณ ค่า", example:"Always be kind.", exampleThai:"จงใจดีเสมอ", rhymeGroup:"ind" },

  // A2 Words
  { id:97, word:"beautiful", phonetic:"/ˈbjuːtɪfəl/", thai:"สวยงาม", category:"adjectives", level:"A2", rhyme:"สวย งาม ดั่ง ดาว บน ฟ้า", example:"Nature is beautiful.", exampleThai:"ธรรมชาติสวยงาม", rhymeGroup:"ul" },
  { id:98, word:"important", phonetic:"/ɪmˈpɔːrtənt/", thai:"สำคัญ", category:"adjectives", level:"A2", rhyme:"สำคัญ ยิ่ง อย่า ลืม ทำ ดี", example:"Education is important.", exampleThai:"การศึกษาสำคัญมาก", rhymeGroup:"ant" },
  { id:99, word:"strong", phonetic:"/strɒŋ/", thai:"แข็งแรง", category:"adjectives", level:"A2", rhyme:"แข็ง แกร่ง กาย ใจ สู้ ไม่ ถอย", example:"Be strong every day.", exampleThai:"แข็งแกร่งทุกวัน", rhymeGroup:"ong" },
  { id:100, word:"brave", phonetic:"/breɪv/", thai:"กล้าหาญ", category:"adjectives", level:"A2", rhyme:"กล้า หาญ ยืน หยัด สู้ ทุก อุปสรรค", example:"Be brave and face your fears.", exampleThai:"จงกล้าหาญสู้กับความกลัว", rhymeGroup:"ave" },
  { id:101, word:"clean", phonetic:"/kliːn/", thai:"สะอาด", category:"adjectives", level:"A2", rhyme:"สะอาด บริสุทธิ์ ดี ต่อ สุขภาพ", example:"Keep your room clean.", exampleThai:"รักษาห้องให้สะอาด", rhymeGroup:"ean" },
  { id:102, word:"quiet", phonetic:"/ˈkwaɪət/", thai:"เงียบ", category:"adjectives", level:"A2", rhyme:"เงียบ สงบ ใจ นิ่ง คิด ได้ ชัด", example:"The library is quiet.", exampleThai:"ห้องสมุดเงียบ", rhymeGroup:"et" },
  { id:103, word:"bright", phonetic:"/braɪt/", thai:"สว่าง/ฉลาด", category:"adjectives", level:"A2", rhyme:"สว่าง ส่อง ทาง ไม่ ให้ หลง ทาง", example:"Your future is bright!", exampleThai:"อนาคตของคุณสดใส!", rhymeGroup:"ight" },
  { id:104, word:"funny", phonetic:"/ˈfʌni/", thai:"ตลก", category:"adjectives", level:"A2", rhyme:"ตลก ขำ ขัน หัวเราะ หาย เครียด", example:"He tells funny jokes.", exampleThai:"เขาเล่าเรื่องตลก", rhymeGroup:"y" },

  // More verbs A2
  { id:105, word:"help", phonetic:"/help/", thai:"ช่วยเหลือ", category:"actions", level:"A1", rhyme:"ช่วย กัน ไว้ โลก นี้ ดี ขึ้น", example:"Help someone today.", exampleThai:"ช่วยเหลือคนอื่นวันนี้เลย", rhymeGroup:"elp" },
  { id:106, word:"share", phonetic:"/ʃeər/", thai:"แบ่งปัน", category:"actions", level:"A1", rhyme:"แบ่ง ปัน ทุก สิ่ง ใจ กว้าง ดี งาม", example:"Share your food with friends.", exampleThai:"แบ่งอาหารให้เพื่อน", rhymeGroup:"are" },
  { id:107, word:"think", phonetic:"/θɪŋk/", thai:"คิด", category:"actions", level:"A1", rhyme:"คิด ดี ก่อน ทำ ดี กว่า แก้ ทีหลัง", example:"Think before you speak.", exampleThai:"คิดก่อนพูด", rhymeGroup:"ink" },
  { id:108, word:"try", phonetic:"/traɪ/", thai:"พยายาม", category:"actions", level:"A1", rhyme:"พยายาม ทำ ดี ที่สุด ทุก วัน ไป", example:"Always try your best.", exampleThai:"พยายามทำดีที่สุดเสมอ", rhymeGroup:"y" },
  { id:109, word:"grow", phonetic:"/ɡroʊ/", thai:"เติบโต", category:"actions", level:"A2", rhyme:"เติบ โต ทุก วัน ดั่ง ต้นไม้ ใหญ่", example:"Plants grow with water.", exampleThai:"ต้นไม้เติบโตด้วยน้ำ", rhymeGroup:"ow" },
  { id:110, word:"dream", phonetic:"/driːm/", thai:"ฝัน", category:"actions", level:"A2", rhyme:"ฝัน ให้ ไกล แล้ว ไป ถึง ดาว สูง", example:"Dream big, work hard!", exampleThai:"ฝันให้ใหญ่ แล้วทำงานหนัก!", rhymeGroup:"eam" },

  // More nature A2
  { id:111, word:"forest", phonetic:"/ˈfɒrɪst/", thai:"ป่า", category:"nature", level:"A2", rhyme:"ป่า ใหญ่ ร่ม เย็น สัตว์ นก อาศัย", example:"The forest is full of animals.", exampleThai:"ป่าเต็มไปด้วยสัตว์ต่างๆ", rhymeGroup:"est" },
  { id:112, word:"ocean", phonetic:"/ˈoʊʃən/", thai:"มหาสมุทร", category:"nature", level:"A2", rhyme:"มหา สมุทร กว้าง ใหญ่ ลึก ล้น ฝัน", example:"The ocean covers most of Earth.", exampleThai:"มหาสมุทรครอบคลุมโลกส่วนใหญ่", rhymeGroup:"an" },
  { id:113, word:"desert", phonetic:"/ˈdezərt/", thai:"ทะเลทราย", category:"nature", level:"A2", rhyme:"ทะเล ทราย ร้อน แรง แต่ สวย งาม", example:"Camels live in the desert.", exampleThai:"อูฐอาศัยอยู่ในทะเลทราย", rhymeGroup:"ert" },
  { id:114, word:"island", phonetic:"/ˈaɪlənd/", thai:"เกาะ", category:"nature", level:"A2", rhyme:"เกาะ เล็ก กลาง ทะเล สวย งาม ไม่มี เปรียบ", example:"The island is surrounded by water.", exampleThai:"เกาะล้อมรอบด้วยน้ำ", rhymeGroup:"and" },
  { id:115, word:"volcano", phonetic:"/vɒlˈkeɪnoʊ/", thai:"ภูเขาไฟ", category:"nature", level:"A2", rhyme:"ภูเขา ไฟ ร้อน แรง พุ่ง ขึ้น ฟ้า", example:"The volcano erupted.", exampleThai:"ภูเขาไฟระเบิด", rhymeGroup:"o" },

  // Daily life A2
  { id:116, word:"morning", phonetic:"/ˈmɔːrnɪŋ/", thai:"เช้า", category:"time", level:"A1", rhyme:"เช้า ตรู่ ลืม ตา ดู ฟ้า สว่าง", example:"Good morning everyone!", exampleThai:"อรุณสวัสดิ์ทุกคน!", rhymeGroup:"ing" },
  { id:117, word:"night", phonetic:"/naɪt/", thai:"กลางคืน", category:"time", level:"A1", rhyme:"กลาง คืน ดาว พราว ฟ้า ฝัน ดี", example:"Good night, sleep tight!", exampleThai:"ราตรีสวัสดิ์ นอนหลับฝันดี!", rhymeGroup:"ight" },
  { id:118, word:"today", phonetic:"/təˈdeɪ/", thai:"วันนี้", category:"time", level:"A1", rhyme:"วัน นี้ ดี ที่สุด ทำ ดี ไว้", example:"Today is a good day.", exampleThai:"วันนี้เป็นวันที่ดี", rhymeGroup:"ay" },
  { id:119, word:"week", phonetic:"/wiːk/", thai:"สัปดาห์", category:"time", level:"A1", rhyme:"หนึ่ง สัปดาห์ เจ็ด วัน ทำ ดี ทุก วัน", example:"There are 7 days in a week.", exampleThai:"หนึ่งสัปดาห์มี 7 วัน", rhymeGroup:"eek" },
  { id:120, word:"year", phonetic:"/jɪər/", thai:"ปี", category:"time", level:"A1", rhyme:"ปี ใหม่ มา แล้ว ฝัน ใหม่ เริ่ม ใหม่", example:"Happy New Year!", exampleThai:"สวัสดีปีใหม่!", rhymeGroup:"ear" },
];

const CATEGORIES = [
  { id:"all", name:"ทั้งหมด", emoji:"📚", color:"#6366f1" },
  { id:"animals", name:"สัตว์", emoji:"🐾", color:"#f59e0b" },
  { id:"colors", name:"สี", emoji:"🌈", color:"#ec4899" },
  { id:"food", name:"อาหาร", emoji:"🍎", color:"#10b981" },
  { id:"school", name:"โรงเรียน", emoji:"✏️", color:"#3b82f6" },
  { id:"body", name:"ร่างกาย", emoji:"👤", color:"#ef4444" },
  { id:"nature", name:"ธรรมชาติ", emoji:"🌿", color:"#22c55e" },
  { id:"family", name:"ครอบครัว", emoji:"👨‍👩‍👧", color:"#f97316" },
  { id:"home", name:"บ้าน", emoji:"🏠", color:"#84cc16" },
  { id:"transport", name:"ยานพาหนะ", emoji:"🚗", color:"#06b6d4" },
  { id:"actions", name:"การกระทำ", emoji:"⚡", color:"#a855f7" },
  { id:"feelings", name:"ความรู้สึก", emoji:"💖", color:"#f43f5e" },
  { id:"adjectives", name:"คุณศัพท์", emoji:"✨", color:"#8b5cf6" },
  { id:"time", name:"เวลา", emoji:"⏰", color:"#0ea5e9" },
];
