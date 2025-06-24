import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  intensity: { type: String, required: true }, // e.g., 'low', 'medium', 'high'
  date: { type: String, required: true },
  calories: { type: Number }, // calculated or user input
  distance: { type: Number }, // in km, optional
  reps: { type: Number } // for exercises like pushups, optional
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;//..