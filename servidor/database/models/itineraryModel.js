const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    activities: { type: [{ name: String, img: String }] },
    authorName: { type: String, required: true },
    authorPic: { type: String, required: true },
    price: { type: Number, required: true, Min: 1, Min: 5 },
    duration: { type: Number, required: true, Min: 1 },
    likes: { type: Number, default: 0 },
    hashtags: [String],
    comments: {
        type: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String, userName: String, userPic: String }],
    },
    usersLike: [String],
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City" },

})

module.exports = mongoose.model('Itinerary', itinerarySchema)