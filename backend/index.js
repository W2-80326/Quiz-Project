const mysql = require('mysql2')
const express = require('express')
const cors = require('cors')
const port = 2222

const login = require('./routes/login')
const qna = require('./routes/qna')

const app = express()
app.use(express.static('uploads/images'))
app.use(express.json());
app.use(cors());

app.use('/login',login)
app.use('/qna',qna)

app.listen(port,()=> {console.log(`Server started at port ${port}`)})