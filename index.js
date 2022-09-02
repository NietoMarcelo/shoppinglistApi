const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(5000, () => {
    console.log("server started")
})