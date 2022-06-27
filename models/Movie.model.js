const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {type: String,
            required: true,
            unique: true
        },
    director: {type: String,
        required: true,
        unique: true
    },
    stars:{
        type: [String],
        required: true
    },
    image:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    showtimes:{
        type: [String],
        required: true
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;