const UserRouter = require('express').Router()
const UserController = require('../controller/UserController')

UserRouter
    .get('/add', (req, res) => {
        UserController.test(req, res)
    })
    .post((req, res) => {
        res.send('post')
    })
    .put((req, res) => {
        res.send('put')
    })

module.exports = UserRouter
