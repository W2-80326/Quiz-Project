const mysql = require('mysql2')
const express = require('express')
const app = express.Router()
const db = require('../db')

app.get('/',(req,res) => {
    const sql = `SELECT * FROM qna`
    db.query(sql,(error,result) => {
        if(error == null){
            db.end
            res.send(result)
        } else {
            db.end
            res.send(error)
        }
    })
})

module.exports = app