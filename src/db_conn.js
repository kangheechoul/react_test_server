const config = require("./config.json");
const mysql = require("mysql2/promise");
const pool = mysql.createPool(config.db_info);

module.exports ={
    send_query : async (sql, param)=>{
        let conn = await pool.getConnection();

        let data = null;
        try{
            [data] = await conn.query(sql);
            await conn.release();
        }catch(e){
            data = new Error(e);
        }
        
        return data;
    },
    // getPool : (callback) =>{
    //     pool.getConnection(function(err, conn){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("db 접속");
    //             callback(conn);
    //             conn.release();
    //         }
            
    //     })
    // },
}

