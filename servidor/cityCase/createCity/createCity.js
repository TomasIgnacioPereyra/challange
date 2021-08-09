const { City,  response  } = require('../cityModule')

const create  = async(req, res = response) =>  {
  let body  = req.body

  const newCity = new City({
    name: body.name,
    country: body.country,
    img:  body.img
  })

  await  newCity.save(  (err, cityDB) =>  {
    if(err){
      return  res.status(500).json({
        ok:false,
        message:  'Error interno del servidor',
        err
      })
    }

    const city = cityDB  

    res.status(201).json({
      ok: true,
      message:  'La Ciudad se creo correctamente',
      city
    })
  })
}

module.exports  = {
  create
}
