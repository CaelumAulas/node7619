const LivrosDAO = require('../db/LivrosDAO3')
module.exports = function(servidor){
    servidor.get("/", function(request, resposta){
        
        const livrosDAO = new LivrosDAO()

        livrosDAO.pegaLivros(function(erro, result){
            if(erro){
                resposta.render("erros/500.ejs", {erro})
            } else {
                resposta.render("produtos/lista.ejs", {
                    livros: result
                })
            }
        })

        console.log(livrosDAO.oi)
    })

    servidor.post("/produtos", function(request, resposta){
        const dados = request.body
        
        livrosDAO.insereLivros(function(){
            resposta.send("Cadastrou")
        })
    })
}