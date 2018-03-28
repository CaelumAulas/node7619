const mysql = require('mysql')
module.exports = {
    getConnection: function(){
        const conexao = mysql.createPool({
            user: "root",
            password: "",
            host: "localhost",
            port: 32768,
            database: "cdc" 
        })
        return conexao
    }
}