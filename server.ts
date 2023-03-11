import express from 'express'
import mongoose from 'mongoose'
import favicon from 'express-favicon'
import path from 'path'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000
const app = express()
const db = require('./config/keys.ts').mongoURI

mongoose
.connect(db)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// if (process.env.NODEMON_FLAG) {
//   console.log("dev")
// } else {
//   console.log("prod")
// }

app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
app.get('/ping', function (req, res) {
  return res.send('pong')
})
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(port)