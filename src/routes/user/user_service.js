const user_dao = require("./user_dao");
const Lib = require("../../lib/lib");
const Auth = require("../../lib/auth");

let auth = new Auth();
let lib = new Lib();


exports.get_list = async (req, res, next) => {
    let dao = new user_dao();

    let data = await dao.add_user();
    let send_str = data > 0 ? "입력 성공" : "입력 실패";
    res.send(send_str);
}

exports.add_user = async (req, res, next) => {
    let dao = new user_dao();

    let data = await dao.add_user();
    let send_str = data > 0 ? "입력 성공" : "입력 실패";
    res.send(send_str);
}

exports.login = async (req, res, next) => {
    let dao = new user_dao();
    
    console.log(req.body);
    
    let where = {
        "u.id" : req.body.id,
        "u.password" : req.body.password
    };

    let where_info = lib.create_where(where);

    let data = await dao.get_list(where_info);
    if(data.length == 0){
        res.send({code:"999" , message:"없는 계정 정보입니다."});
    }else{
        let token = auth.create_jwt(data[0]);
        let return_data = {
            code:"1",
            message:"로그인 성공",
            token : token
        };
        let user_login_idx = await dao.add_login_history(data[0].user_idx,req.headers['user-agent']);
        if(user_login_idx > 0){
            res.send(return_data);
        }else{
            res.send({code:"998", message:"내역추가에 실패하였습니다."});
        }
    }
}

exports.logout = (req, res, next) => {

} 