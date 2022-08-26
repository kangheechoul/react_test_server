const user_dao = require("./user_dao");

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