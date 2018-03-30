const pool = require('../db/pool')

class LivrosDAO{
    constructor(){
        this._conexao = pool.getConnection()
    }

    lista(callback){
        this._conexao.query("SELECT * FROM livros", callback)
    }

    insereLivro(livro){
        return new Promise((resolve, reject) => {
            this._conexao.query("INSERT INTO livros SET ?", livro, function(erro){
                if(erro){
                    console.log(erro)
                    reject([erro])
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = LivrosDAO