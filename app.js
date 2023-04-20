const express = require('express')
const app = express()
const rawData= require("./tools/rawData")

var cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

module.exports =app;