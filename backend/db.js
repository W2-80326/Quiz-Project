const mysql = require('mysql2')
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "manager",
    database : "quiz_pro"
})

connection.connect()

module.exports = connection