// 라우팅을 위한 파일 
const router = require("express").Router();
const service = require("./user_service");


router.post("/login", service.login);
router.get("/list", service.get_list);
router.get("/add", service.add_user)

router.get("/", (req,res)=>{
    res.send("user 페이지");
});


module.exports = router;