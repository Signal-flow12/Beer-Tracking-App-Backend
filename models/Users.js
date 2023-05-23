const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true,
        id: false,
        toJSON: {
            virtuals: true,
            transform:(_doc, ret) => {
                delete ret.password;
                return ret;
            }
        }
    }
)

const Users = mongoose.model("User", userSchema)

module.exports = Users
