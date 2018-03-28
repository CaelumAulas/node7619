const pool = require('../db/pool')

class LivrosDAO{
    constructor(){
        this.conexao = pool.getConnection()
    }

    pegaLivros(callback){
        this.conexao.query("SELECT * FROM livros", callback)
    }

    insereLivro(callback){
        this.conexao.query()
    }
}

module.exports = LivrosDAO