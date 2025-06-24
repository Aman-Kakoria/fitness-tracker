import { Request, Response } from 'express';
import Achievement from '../models/Achievement';
import Workout from '../models/Workout';

export class AchievementController {
  async addAchievement(req: Request, res: Response) {
    const { title, description, achievedOn } = req.body;
    try {
      const achievement = new Achievement({ title, description, achievedOn });
      await achievement.save();
      res.json({ message: 'Achievement added!' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getAchievements(req: Request, res: Response) {
    try {
      const achievements = await Achievement.find().sort({ achievedOn: -1 });
      res.json(achievements);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getUnlockedAchievements(req: Request, res: Response) {
    try {
      const workouts = await Workout.find();
      const uniqueDays = new Set(workouts.map(w => w.date)).size;
      const totalCalories = workouts.reduce((sum, w) => sum + (w.calories || 0), 0);

      const achievements = [];

      if (uniqueDays >= 30)
        achievements.push({
          title: 'Consistent for 30 Days',
          description: 'Logged workouts on 30 different days!'
        });

      if (totalCalories >= 10000)
        achievements.push({
          title: '10,000 Calories Burned',
          description: 'You have burned 10,000 calories!'
        });

      if (totalCalories >= 50000)
        achievements.push({
          title: 'Medal: 50,000 Calories Burned',
          description: '🏅 Incredible! You have burned 50,000 calories!'
        });

      res.json(achievements);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
}