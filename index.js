const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('welcome chiques :D')
})

app.use((req, res) => {
    res.send('nacho')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server started at port : " + PORT)
})