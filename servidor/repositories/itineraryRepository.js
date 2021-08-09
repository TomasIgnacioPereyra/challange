
const Itinerary  = require('../database/models/itineraryModel')

const getAll  = async ()  =>  await Itinerary.find({})
const count = async ()  =>  await Itinerary.count()
const getOne  = async id  =>  await Itinerary.findById(id)
//const getCityByName = async name  =>  await Itinerary.find({name:name})
const getByCity = async cityId => await Itinerary.findOne({cityId});

module.exports  = {
  getAll,
  getOne,
  getByCity,
  count
}