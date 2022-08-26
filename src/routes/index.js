// 라우팅을 위한 파일 
const router = require("express").Router();

// const notice = require("./notice/notice");
// const schedule = require("./schedule/schedule");
const user = require("./user/user");

router.use("/user", user);

module.exports = router;