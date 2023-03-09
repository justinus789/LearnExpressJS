const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const responseFormatter = require('./responseFormatter')

app.use(bodyParser.json())

// Route
app.get('/mahasiswa', (req, res) => {
    const query = "SELECT * FROM mahasiswa"

    db.query(query, (err, data) => {
        responseFormatter(200, data, "OK", res)
    })
})

app.get('/mahasiswa/:npm', (req, res) => {
    const npm = req.params.npm
    const query = "SELECT * FROM mahasiswa WHERE npm =" + npm

    db.query(query, (err, data) => {
        if(err) throw err
        responseFormatter(200, data, "OK", res)
    })
})

app.post('/mahasiswa', (req,res) => {
    const { nama, npm, kelas, alamat } = req.body
    const query = `INSERT INTO mahasiswa (npm, nama, kelas, alamat) VALUES ('${npm}', '${nama}', '${kelas}', '${alamat}')`
    
    db.query(query, (err, data) => {
        if(err) throw err
        responseFormatter(200, data, "OK", res)
    })
})

app.put('/mahasiswa/:npm', (req,res) => {
    const npm = req.params.npm
    const { nama, kelas, alamat } = req.body
    const query = `UPDATE mahasiswa SET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE npm = ${npm}`

    db.query(query, (err, data) => {
        if(err) throw err
        responseFormatter(200, data, "OKAY", res)
    }) 
})

app.delete('/mahasiswa/:npm', (req,res) => {
    const npm = req.params.npm
    const query = `DELETE FROM mahasiswa WHERE npm = ${npm}`
    
    db.query(query, (err, data) => {
        if(err) throw err
        responseFormatter(200, data, "DELETED", res)
    })  
})

// Serve
app.listen(port, () => {
    console.log('Example app listening on port ' + port)
}) 