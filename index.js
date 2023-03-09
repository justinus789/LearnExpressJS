const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const responseFormatter = require('./responseFormatter')

app.use(bodyParser.json())

// Route
app.get('/', (req, res) => {
    const query = "SELECT * FROM mahasiswa"
    
    db.query(query, (err, data) => {
        // Result
        responseFormatter(200, data, "Success", res)
    })
})

app.get('/find', (req, res) => {
    const query = "SELECT nama FROM mahasiswa WHERE npm =" + req.query.npm

    db.query(query, (err, data) => {
        responseFormatter(200, data, "OK", res)
    })
})

app.post('/login', (req,res) => {
    console.log({ requestFromOutside : req.body })
    res.send("Login Berhasil !")    
})

// Serve
app.listen(port, () => {
    console.log('Example app listening on port ' + port)
}) 