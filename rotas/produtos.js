module.exports = function(servidor){
    servidor.get("/", function(request, resposta, next){
        request.livrosDAO.lista(function(erro, result){
            if(erro){
                next(erro)
            } else {
                resposta.format({
                    json: function(){
                        resposta.send(result)
                    }
                    ,html: function(){
                        resposta.render("produtos/lista", {
                            livros: result
                        })
                    }
                    ,"application/x-itau": function(){
                        resposta.send(string)
                    }
                })
            }
        })
    })

    servidor.get("/produtos/cadastra", function(req, res){
        res.render("produtos/form", {
            validationErrors: []
            ,livro: {}
        })
    })

    servidor.post("/produtos", (request, resposta, next) => {
        const livro = request.body


        request.assert('titulo', "Titulo vazio").notEmpty()
        request.assert('preco', "Preco vazio").notEmpty()
        request.assert('preco', "Preco precisa ser um número").isNumeric()

        const promiseValidacao = request.asyncValidationErrors()
        
        promiseValidacao
            .then(() => {
                return request.livrosDAO.insereLivro(livro)
            })
            .then(() => {
                resposta.redirect("/")
            })
            .catch((listaErros) => {
                console.log(listaErros)
                resposta.render("produtos/form", {
                    validationErrors: listaErros
                    ,livro: livro
                })
            })
            .catch(next)
    })
}