const UserModel = require('../model/UserModel')
const UserCtrl = {
    test: (req, res) => {
        UserModel.test(req, res)
    }
}

module.exports = UserCtrl
