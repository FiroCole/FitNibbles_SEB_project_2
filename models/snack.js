const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snackSchema = new Schema({
    Snack: {
        type: String,
        enum: ["Twinkle Toes", "Muffin Melts", "Froggie Dips"],
        required: true
    },
    Repetition: {
        type: Number,
        min: 1,
        max: 9999,
        required: true,
    },
    Sets: {
        type: Number,
        min:1,
        max: 9999,
        required: true,
    },
    equipment: {
        type: Schema.Types.ObjectId,
        ref: "Equipment",
        required: true,
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

module.exports = mongoose.model("Snack", snackSchema)