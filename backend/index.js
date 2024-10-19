const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Thay <username>, <password>, và <cluster> bằng thông tin thực của bạn
const mongoURI = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Đã kết nối tới MongoDB'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.listen(port, () => {
    console.log(`Server đang chạy tại cổng ${port}`);
});
