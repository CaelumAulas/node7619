const pool = require('../db/pool')

let conexao

function pegaLivros(callback){
    conexao.query("SELECT * FROM livros", callback)
}

function insereLivro(){
    conexao.query()
}

function LivrosDAO(){   
    conexao = pool.getConnection()

    return {
        pegaLivros: pegaLivros,
        insereLivro: insereLivro
    }
}

module.exports = LivrosDAO