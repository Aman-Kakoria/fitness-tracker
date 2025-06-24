import { Request, Response } from 'express';
import Workout from '../models/Workout';

export class WorkoutController {
  async addWorkout(req: Request, res: Response) {
    const { type, duration, intensity, date, calories, distance, reps } = req.body;
    try {
      const workout = new Workout({ type, duration, intensity, date, calories, distance, reps });
      await workout.save();
      res.json({ message: 'Workout added successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getWorkouts(req: Request, res: Response) {
    try {
      const workouts = await Workout.find().sort({ date: -1 });
      res.json(workouts);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
}