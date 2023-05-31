const mongoose = require('mongoose');

const BreweriesSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
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

        likes: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
            }
        ]
    },
    {
        timestamps: true
    }

);

const Breweries = mongoose.model('breweries', BreweriesSchema);

module.exports = Breweries