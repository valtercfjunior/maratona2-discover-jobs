const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

server.set('view engine', 'ejs')

//mudar o local do views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos estaticos
server.use(express.static("public")) //use = adiciona configurações ao servidor

//usar o req body
server.use(express.urlencoded({ extended: true}))


//routes
server.use(routes)



server.listen(3000, () => {console.log('rodando')})