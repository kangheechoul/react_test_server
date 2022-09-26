const config = require("./config.json");
const mysql = require("mysql2/promise");
const pool = mysql.createPool(config.db_info);

module.exports ={
    send_query : async (sql, param)=>{
        let conn = await pool.getConnection();

        let data = null;
        try{
            [data] = await conn.query(sql, param);
            conn.release();
        }catch(e){
            data = new Error(e);
        }
        
        return data;
    },
}

