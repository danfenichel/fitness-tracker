const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    distance: {
        type: Number,
        required: false
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;