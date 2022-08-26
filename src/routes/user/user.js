// 라우팅을 위한 파일 
const router = require("express").Router();
const service = require("./user_service");


router.get("/list", service.get_list);
router.post("/add", service.add_user)


module.exports = router;