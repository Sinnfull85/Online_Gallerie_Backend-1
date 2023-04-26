const express = require('express')
const app = express()
const rawData = require('./tools/rawData')
const gallerDataRouter = require('./routes/galleryData')

var cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/gallery/color', async (req, res) => {
  if (req.body.url) {
    const data = await fetch(req.body.url)
    const imageBlob = await data.blob()
    res.set({
      'Access-Control-Allow-Origin': '*'
    })
    res.type(imageBlob.type)
    imageBlob.arrayBuffer().then(buf => {
      res.send(Buffer.from(buf))
    })
  } else {
    res.send(200)
  }
})

app.use('/gallery', gallerDataRouter)
module.exports = app
