const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const db = require('./keys').mongoURI

const mongoose = require('mongoose')

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => console.log ('Conexión a MongoDB establecida'))
  .catch(err => console.log (err))


app.use('/cities', require('./routes/cities'))
app.use('/itineraries', require('./routes/itineraries'))


app.listen (port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});