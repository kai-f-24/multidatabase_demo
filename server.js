const express = require("express");
const app = express();
const mongoose = require("mongoose");

const router = require("./routes/routes");
app.use(router);

require('dotenv').config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.zxd10jh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() => console.log("データベースに接続に成功しました。"))
.catch((err) => console.log(err));

app.listen(3000, ()=> {
    console.log("サーバーが起動しました。");
});