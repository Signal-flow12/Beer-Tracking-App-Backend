const mongoose = require('mongoose');

const BreweriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Brewery name required']
        },

        address: {
            type: String,
            required: [true, 'Town name required']
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
        }
    },
    {
        timestamps: true
    }

);

const Breweries = mongoose.model('breweries', BreweriesSchema);

module.exports = Breweries