const pool = require('../db/pool')

function LivrosDAO(){
    this._conexao = pool.getConnection()
}

LivrosDAO.prototype.lista = function pegaLivros(callback){
    this.conexao.query("SELECT * FROM livros", callback)
}

LivrosDAO.prototype.insereLivro = function insereLivro(conexao){
    this.conexao.query()
}

LivrosDAO.prototype.oi = "Alo"

module.exports = LivrosDAO