const router = require('express').Router()
const UserRouter = require('./UserRouter')

router.use('/user', UserRouter)

router.use('/*', (req, res) => {
    res.status(404).json('【SERVER ERROR】Interface Not Found !')
})

module.exports = router
