const mysql     = require('mysql');
const config    = require('./db');

const fem = mysql.createConnection(config.config);
console.log(fem);
exports.fem = fem;