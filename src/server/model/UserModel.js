const _connect = require('../config/mysql')

const UserModel = {
    test: (req, res) => {
        _connect.query('sql 语句', (err, result, fields) => {
            if (err) throw err
            res.json(result)
        })
    }
}

module.exports = UserModel
