const mysql = require('mysql2')
const express = require('express')
const app = express.Router()
const db = require('../db')

// this is post method to register
app.post("/",(req,res) => {
    const { firstName, lastName, email, password} = req.body
    const sql = `INSERT INTO login(firstName, lastName, email, password)
    VALUES('${firstName}','${lastName}','${email}','${password}')`
    
    db.query(sql,(error,result) =>{
        if(error == null){
            // console.log("Result : "+ JSON.stringify(result))
            db.end
            res.send(result)
        }
        else{
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(error));
            db.end();
            res.end();
        }
    })
})

app.get('/',(req,res) => {
    const sql = `SELECT * FROM login`
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