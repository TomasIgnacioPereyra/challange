const { Itinerary, response } = require('../ItineraryModule')

const create = async (req, res = response) => {
    let body = req.body

    const itineraryParam = {
        title: body.title,
        img: body.img,
        activities: body.activities,
        authorName: body.authorName,
        authorPic: body.authorPic,
        price: body.price,
        duration: body.duration,
        likes: body.likes,
        hashtags: body.hashtags,
        comments: body.comments,
        usersLike: body.usersLike,
        cityId: body.cityId,
    }
    const newItinerary = new Itinerary(itineraryParam)

    await newItinerary.save((err, itineraryDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error interno del servidor',
                err
            })
        }

        const itinerary = itineraryDB

        res.status(201).json({
            ok: true,
            message: 'El Itinerario se creo correctamente',
            itinerary
        })
    })
}

module.exports = {
    create
}
