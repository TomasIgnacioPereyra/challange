const { Itinerary,  response  } = require('../ItineraryModule')
const itineraryRepository  = require('../../repositories/itineraryRepository')
const itineraryModel = require('../../database/models/itineraryModel')


const getItineraryByCity  = async (req, res = response) =>  {
    console.log(req);
    const cityId  = req.query.cityId;
  
    try {
  
        const itineraryDb  = await itineraryRepository.getItineraryByCity(cityId);
        console.log(itineraryDb);
  
        if(!itineraryDb){
          return  res.status(400).json({
            ok:false,
            message:  '',
            err
          })
        }
    
       return res.status(200).json({
          ok: true,
          message:  'Itinerario',
          response: itineraryDb,
        })  
  
      } catch (error) {
        res.status(500).json({
          ok:false,
          message:  'Error Interno del Servidor',
          error
        })
      }
  }

  module.exports  = {
    getItineraryByCity
  }
  