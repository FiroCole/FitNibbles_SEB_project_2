const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    Exercise: {
        type: String,
    },
    Repetition: {
        type: Number,
        min: 1,
    },equipment: {
        type: Schema.Types.ObjectId,
        ref: "Equipment"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true   
})

module.exports = mongoose.model("Exercise", exerciseSchema)