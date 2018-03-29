const express = require('express')

const server = express()
const LivrosDAO = require('./db/LivrosDAO3')

server.set("view engine", "ejs")

server.use(express.urlencoded())
server.use(express.static("./public"))

server.use(function(req, res, next){
  req.livrosDAO = new LivrosDAO()
  next()
})

require("./rotas/produtos")(server)

server.use(function(req, res, next){
    res.render("erros/500", {erro: "Erro 404"})
})

server.use(function(erro, request, resposta, next){
    resposta.render("erros/500", {erro})
})

module.exports = server

// const queryString = require('query-string');
// server.use(function(request, resposta, next){
//     console.log("Use")
//     let dadosString = ""
//     request.on("data", function(chunk){
//         dadosString += chunk.toString()   
//     })
//     request.on("end",function(){
//         request.body = queryString.parse(dadosString)
//         next()
//     })
// })