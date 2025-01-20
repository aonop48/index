const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// กำหนด View Engine เป็น EJS
app.set('view engine', 'ejs');

// เส้นทางสำหรับหน้าแรก
app.get('/', (req, res) => {
    res.render('home'); // ไฟล์ home.ejs ในโฟลเดอร์ views
});

// เส้นทางสำหรับหน้า about
app.get('/about', (req, res) => {
    res.render('about'); // ไฟล์ about.ejs ในโฟลเดอร์ views
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
