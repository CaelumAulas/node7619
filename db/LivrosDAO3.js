const pool = require('../db/pool')

class LivrosDAO{
    constructor(){
        this._conexao = pool.getConnection()
    }

    lista(callback){
        this._conexao.query("SELECT * FROM livros", callback)
    }

    insereLivro(livro, callback){
        this._conexao.query("INSERT INTO livros SET ?", livro, callback)
    }
}

module.exports = LivrosDAO