const db_conn = require("../../db_conn");


class user_dao {

    constructor(){
        this.count = 0;
        this.list = [];
        this.info = {};
        this.affectedRows = 0;
        this.idx = 0;
    }

    get_info(where){

    }

    // user 리스트 조회
    async get_list(where_info, order=[], limit=[]){
        let sql = `
            select
                u.user_idx,
                u.id,
                u.name,
                u.phone,
                u.nickname,
                u.level_idx,
                u.point,
                u.visit,
                u.insert_date,
                u.insert_time,
                u.update_date,
                u.update_time,
                l.name as level_name
            from
                tb_user as u
            left join
                tb_level as l
            on
                u.level_idx = l.level_idx
            where
                u.delete_flag = 'N'
            ${where_info.where}
        `;
        if(order.length == 0){
            sql += ` order by u.user_idx asc`;
        }else{
            sql+= ` order by ${order}`;
        }

        if(limit.length > 0){
            sql += ` limit ${limit}`
        } 

        let data = await db_conn.send_query(sql, where_info.bind);
        this.list = data;
        return this.list;
    }

    // 회원 추가 테스트
    async add_user(){
        let sql = `
            insert into tb_user ( id, password, name ) values ( 'id' , 'password' , '테스트' )
        `;
        let data = await db_conn.send_query(sql);
        this.affectedRows = data.affectedRows;
        return this.affectedRows;
    }

    // 로그인 내역 추가
    async add_login_history(user_idx, user_agent){
        let sql = `
            insert into tb_user_login ( user_idx , user_agent, insert_date, insert_time ) values ('${user_idx}', '${user_agent}', now(), now());
        `;
        let data = await db_conn.send_query(sql);
        this.idx = data.insertId;
        return this.idx;
    }
}

module.exports = user_dao;