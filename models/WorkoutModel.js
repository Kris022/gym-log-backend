const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    exercises: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise"
    }
})

// Create model using the schema
const Workout = mongoose.model("Workout", workoutSchema);

// Export the model
module.exports = Workout;