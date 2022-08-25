const config = require("./config.json");
const mysql = require("mysql");

const pool = mysql.createPool(config);


module.exports ={
    getPool : (callback) =>{
        pool.getConnection(function(err, conn){
            if(err){
                console.log(err);
            }else{
                callback(conn);
            }
            conn.release();    
        })
    }
}

