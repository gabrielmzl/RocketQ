const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {title: "Início", page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {title: "Criar Sala", page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room", {title: "Perguntas e Respostas"}))
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route