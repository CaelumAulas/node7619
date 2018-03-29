module.exports = function(servidor){
    servidor.get("/", function(request, resposta, next){
        request.livrosDAO.lista(function(erro, result){
            if(erro){
                next(erro)
            } else {
                resposta.render("produtos/lista", {
                    livros: result
                })
            }
        })
    })

    servidor.get("/produtos/cadastra", function(req, res){
        res.render("produtos/form", {
            validationErrors: []
        })
    })

    servidor.post("/produtos", function(request, resposta, next){
        const livro = request.body
        
        request.livrosDAO.insereLivro(livro, function(erro){
            if(erro){
               next(erro)
            } else {
                resposta.redirect("/")
            }
        })
    })
}