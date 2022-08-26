const user_dao = require("./user_dao");

exports.getList = (req, res, next) => {
    let dao = new user_dao();

    let data = dao.getList();

    res.send(data);
}