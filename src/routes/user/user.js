// 라우팅을 위한 파일 
const router = require("express").Router();
const service = require("./user_service");


router.get("/list", service.getList);


module.exports = router;