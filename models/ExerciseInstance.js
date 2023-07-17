const mongoose = require('mongoose');

const exerciseInstanceSchema = new mongoose.Schema({
  workoutId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout',
    required: true
  },
  exerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  weights: [{
    type: Number
  }]
});

const ExerciseInstance = mongoose.model('ExerciseInstance', exerciseInstanceSchema);

module.exports = ExerciseInstance;
