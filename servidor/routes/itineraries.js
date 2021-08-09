//const express = require('express')
const { Router  } = require('../itineraryCase/itineraryModule')
const router = new  Router()
const {  get  } = require('../itineraryCase/itineraryController')


router.get('/itinerary', get.getItineraryByCity)
  
module.exports = router