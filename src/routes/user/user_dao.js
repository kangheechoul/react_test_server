const mysql = require("mysql");
const getPool = require("../../db_conn");


class user_dao {

    constructor(){
        this.count = 0;
        this.list = [];
        this.info = {};
    }

    getList(where){
        this.count = 4;
        this.list = [
            {
                "schedule_idx" : "0",
                "name" : "테스트 0",
                "date" : "2022-08-26"
            },
            {
                "schedule_idx" : "1",
                "name" : "테스트 1",
                "date" : "2022-08-27"
            },
            {
                "schedule_idx" : "2",
                "name" : "테스트 2",
                "date" : "2022-08-28"
            },
            {
                "schedule_idx" : "3",
                "name" : "테스트 3 ",
                "date" : "2022-08-29"
            },
        ];
        return {
            "count" : this.count,
            "list" : this.list
        };
    }
}

module.exports = user_dao;