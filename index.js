const express = require('express');


const db = require('./keys').mongoURI

const mongoose = require("mongoose")

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB establecida'))

    .catch(err => console.log(err))


const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/cities', require('./routes/cities'))


app.listen(port, () => {

    console.log(`App listening at http://localhost:${port}`)

});