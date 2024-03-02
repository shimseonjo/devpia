const express = require('express')
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express()

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/todo", require("./routes/todoRoutes"));

app.listen(port,()=>{
  console.log(`${port}번 포트에서 서버 실행 중`);
})