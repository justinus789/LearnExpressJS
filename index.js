const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Route
app.get('/', (req, res) => {
    res.statusCode = 200
    res.send('Howmieeee')
})

app.get('/hello', (req, res) => {
    console.log({ reqFromQuery : req.query })
    res.send('Hello World!')
})

app.post('/login', (req,res) => {
    console.log({ requestFromOutside : req.body })
    res.send("Login Berhasil !")    
})

// Serve
app.listen(port, () => {
    console.log('Example app listening on port ' + port)
}) 