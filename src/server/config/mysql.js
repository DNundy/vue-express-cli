const mysql = require('mysql')
const dbName = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
    port: 3306,
    dateStrings: true
})
module.exports = dbName
