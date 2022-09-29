const jwt = require("jsonwebtoken");

class Auth {
    
    constructor(){
        this.jwt_key = "key";
    }

    create_jwt = (data) => {
        let return_data = "";
        
        let sign_data = data;
        sign_data.type = "JWT"

        return_data = jwt.sign(sign_data,this.jwt_key,{
            expiresIn:"15m",
            issuer: data.name,
        });
        return return_data;
    }

    jwt_check = (token) => {
        let return_data = ""; 
        try{
            let hash_data = jwt.verify(token,this.jwt_key);
            delete hash_data.exp;
            delete hash_data.iss;
            
            
            return_data={
                code : "001",
                id : hash_data.user_idx,
                token : this.create_jwt(hash_data)
            }
            
            return return_data;

        }catch(error){
            if(error.name == "JsonWebTokenError"){
                return_data = {code:"401" , message:"유효하지 않은 토큰입니다."};
            }else if(error.name == "TokenExpiredError"){
                return_data = {code:"419" , message:"토큰이 만료되었습니다"};
            }else{
                console.log(error);
            }
            return return_data;

        }
    }
}

module.exports = Auth;