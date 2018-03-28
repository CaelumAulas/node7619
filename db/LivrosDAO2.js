const pool = require('../db/pool')

function LivrosDAO(){
    this.conexao = pool.getConnection()
}

LivrosDAO.prototype.pegaLivros = function pegaLivros(callback){
    this.conexao.query("SELECT * FROM livros", callback)
}

LivrosDAO.prototype.insereLivro = function insereLivro(conexao){
    this.conexao.query()
}

LivrosDAO.prototype.oi = "Alo"

module.exports = LivrosDAO