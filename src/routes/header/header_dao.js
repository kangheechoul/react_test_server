const db_conn = require("../../db_conn");


class header_dao {

    constructor(){
        this.count = 0;
        this.list = [];
        this.info = {};
        this.affectedRows = 0;
    }

    async get_menu(){
        let sql = `
        select
        m.menu_idx,
        m.menu_group_idx,
        m.name,
        m.level,
        mg.name as 'menu_title',
        mg.level as 'menu_title_level'
        from 
        tb_menu as m
        left join tb_menu_group as mg
        on m.menu_group_idx = mg.menu_group_idx
        order by mg.level asc, m.level asc
        `;

        let data = await db_conn.send_query(sql);
        this.list = data;
        return this.list;
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

module.exports = header_dao;