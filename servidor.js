const express = require('express')

const server = express()

server.use(express.static("./public"))

require("./rotas/produtos")(server)

module.exports = server