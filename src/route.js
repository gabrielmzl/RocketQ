const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {title: "Início"}))
route.get('/room', (req, res) => res.render("room", {title: "Perguntas e Respostas"}))
route.get('/create-pass', (req, res) => res.render("create-pass", {title: "Criar Sala"}))

route.post('/room/:room/:question/:action')

module.exports = route