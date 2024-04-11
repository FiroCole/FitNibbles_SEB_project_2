const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    equipment: {
        type: String,
        enum: ["Gym Equipment", "Home Equipment", "Other"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Equipment", equipmentSchema)