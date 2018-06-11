const router = require('express').Router()
const _connect = require('../config/mysql')

router
    .get('/add', (req, res) => {
        _connect.query('select * from trading_goods', (err, result, fields) => {
            if (err) throw err
            res.json(result)
        })
    })
    .post((req, res) => {
        res.send('post aaaa')
    })
    .put((req, res) => {
        res.send('put  aaa')
    })

module.exports = router
