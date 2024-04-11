const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snackSchema = new Schema({
    Snack: {
        type: String,
        enum: ["Twinkle Toes", "Muffin Melts", "Froggie Dips"],
    },
    userSnack: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Snack", snackSchema)