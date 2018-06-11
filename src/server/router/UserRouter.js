const UserRouter = require('express').Router()
const UserController = require('../controller/UserController')

UserRouter
    .get('/add', (req, res) => {
        UserController.add(req, res)
    })
    .post((req, res) => {
        res.send('post aaaa')
    })
    .put((req, res) => {
        res.send('put  aaa')
    })

module.exports = UserRouter
