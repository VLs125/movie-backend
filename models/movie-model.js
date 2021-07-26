const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
        name: { type: String, required: true },
        time: { type: Number, required: true },
        rating: { type: Number, required: true },
        img: { type: String, required: true }
    }, { timestamps: true },

)

module.exports = mongoose.model('movies', Movie)