import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  achievedOn: { type: String, required: true }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

export default Achievement;//..