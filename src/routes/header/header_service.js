const header_dao = require("./header_dao");

exports.get_menu = async (req, res, next) => {
    let dao = new header_dao();

    let data = await dao.get_menu();
    let send_data = [];

    data.map((a) => {
        let idx = a.menu_title_level - 1;
        if(send_data[idx] == undefined){
            send_data.push({
                "title" : a.menu_title,
                "idx" : a.menu_group_idx,
                "level" : a.menu_title_level,
                "list" : [{"idx" : a.menu_idx, "name" : a.name}],
            });
        }else{
            send_data[idx].list.push({"idx": a.menu_idx, "name" : a.name});
        }
    });

    res.send(send_data);
}
