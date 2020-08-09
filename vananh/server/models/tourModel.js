const mongoose = require('mongoose');

const TourSchema = mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    context: { type: String, required: true },
    category: { type: Array, default: ["resort", "trăng mật"]},
    alt: { type: String, default: "img" },
})

const Tour=mongoose.model("tours",TourSchema,"tours")

module.exports = {
    Tour,TourSchema
}