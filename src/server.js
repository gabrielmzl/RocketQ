const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.use(express.static("public"));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}))
server.use(route)

server.listen(3000, () => console.log(`Server initialized in port 3000.`))