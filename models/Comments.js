const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        comments: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },   
        breweries: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'breweries'
        }
    },
    {
        timestamps: true
    }   

)

const Comments = mongoose.model('comment', commentsSchema);

module.exports = Comments