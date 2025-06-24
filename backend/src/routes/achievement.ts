import { Router } from 'express';
import { AchievementController } from '../controllers/achievementController';

const router = Router();
const achievementController = new AchievementController();

router.get('/unlocked', achievementController.getUnlockedAchievements.bind(achievementController));

export default router;//..