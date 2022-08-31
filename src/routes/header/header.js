// 라우팅을 위한 파일 
const router = require("express").Router();
const service = require("./header_service");


router.get("/get_menu", service.get_menu);
router.get("/get_slide_menu", service.get_slide_menu);

router.get("/", (req,res)=>{
    res.send("");
});


module.exports = router;