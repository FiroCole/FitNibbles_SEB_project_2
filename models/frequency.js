const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const frequencySchema = new Schema({
    
    Repetition: {
        type: Number,
        min: 1,
        max: 9999,      
    },
    Sets: {
        type: Number,
        min:1,
        max: 9999,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    snack: {
        type:Schema.Types.ObjectId,
        ref: "Snack"
    },
    Date: {
        type:Date,
    }
}, {
    timestamps: true   
})

module.exports = mongoose.model("Frequency", frequencySchema)