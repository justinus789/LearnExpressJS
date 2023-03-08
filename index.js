const express = require('express')
const app = express()
const port = 3000

// Route
app.get('/', (req, res) => {
    res.statusCode = 200
    res.send('Home')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req,res) => {
    if(req.name === "Justice") {
        res.send("Login Berhasil !")
    }
})

// Serve
app.listen(port, () => {
    console.log('Example app listening on port ' + port)
}) 