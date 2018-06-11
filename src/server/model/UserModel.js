const _connect = require('../config/mysql')

const UserModel = {
    add: (req, res) => {
        _connect.query('select * from trading_goods', (err, result, fields) => {
            if (err) throw err
            res.json(result)
        })
    }
}

module.exports = UserModel
