import { Router } from 'express';
import { WorkoutController } from '../controllers/workoutController';

const router = Router();
const workoutController = new WorkoutController();

router.post('/add', workoutController.addWorkout.bind(workoutController));
router.get('/history', workoutController.getWorkouts.bind(workoutController));

export default router;//..