const express = require('express')
const mongoose = require('mongoose')

const app = express()



// Db connection
const dbUrl = 'mongodb+srv://cajiibxaaji02:T3oCB1oD6kF439nW@cluster0.7qh5e7x.mongodb.net/ninja-blog'
mongoose.connect(dbUrl)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    return res.send('<h1>Hello world</h1>')
})