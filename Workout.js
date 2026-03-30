const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema({
  exId: { type: String, required: true },
  exerciseName: { type: String, required: true },
  set: { type: Number, required: true },
  weight: { type: Number, required: true },
  reps: { type: Number, required: true },
  rpe: { type: Number, min: 1, max: 10 },
  volume: { type: Number },
  notes: { type: String }
});

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  planId: { type: String, enum: ['A', 'B', 'Legs'], required: true },
  totalVolume: { type: Number, default: 0 },
  averageRpe: { type: Number },
  pumpSelfieUrl: { type: String }, // Hier nur die URL vom Cloud-Speicher (S3/Cloudinary)
  logs: [SetSchema]
});

module.exports = mongoose.model('Workout', WorkoutSchema);