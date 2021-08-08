const express = require('express')
const router = express.Router()

const cityModel = require('../models/cityModel')


router.get('/test', (req, res) => {
    res.send({ msg: 'Ruta de prueba de ciudades.' })
})

router.get('/all', (req, res) => {
    cityModel.find({})
        .then(data => {
            res.send(data)
        }).catch(err => console.log(err));
});


router.post('/', (req, res) => {

    let newCity = {
        name: req.body.name,
        country: req.body.country
    };

    const cityInMongo = cityModel.findOne(newCity);

    if (cityInMongo) {
        res.send({ msg: `ya existe una city con el name '${newCity.name}'` })
    } else {
        newCity.img = req.body.img;
        const newCity = new cityModel(newCity)

        newCity.save()
            .then(city => {
                res.send(city)
            })
            .catch(err => {
                res.status(500).send("Error del servidor")
            })
    }
});


module.exports = router