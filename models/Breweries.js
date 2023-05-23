const mongoose = require('mongoose');

const BreweriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Brewery name required']
        },

        address: {
            type: String,
            required: [true, 'Address required']
        },

        website: {
            type: String,
            required: [true, 'Please provide a website']
        },

        image: {
            type: String,
            required: [true, 'Please provide an image']
        },

        flagship: {
            type: String,
            required: [true, 'Proivde a flagsip brew']
        },

        likes: {
            type: Number
        }
    },
    {
        timestamps: true
    }

);

const Breweries = mongoose.model('breweries', BreweriesSchema);

module.exports = Breweries