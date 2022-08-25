const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const cors = require("cors");


app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(7777, ()=>{
    console.log("7777 포트 열림");
});