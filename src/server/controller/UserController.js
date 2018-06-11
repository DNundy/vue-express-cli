const UserModel = require('../model/UserModel')
const UserCtrl = {
    add: (req, res) => {
        UserModel.add(req, res)
    }
}

module.exports = UserCtrl
