const db_conn = require("../../db_conn");


class user_dao {

    constructor(){
        this.count = 0;
        this.list = [];
        this.info = {};
        this.affectedRows = 0;
    }

    get_info(where){
        
    }

    get_list(where, order){
        
    }

    async add_user(){
        let sql = `
            insert into tb_user ( id, password, name ) values ( 'id' , 'password' , '테스트' )
        `;
        let data = await db_conn.send_query(sql);
        this.affectedRows = data.affectedRows;
        return this.affectedRows;
    }
   
}

module.exports = user_dao;