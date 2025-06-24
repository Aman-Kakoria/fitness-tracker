import express from 'express';
import authRoutes from './auth';
import workoutRoutes from './workout';
import achievementRoutes from './achievement';

export function setRoutes(app: express.Application) {
  app.use('/auth', authRoutes);
  app.use('/workout', workoutRoutes);
  app.use('/achievement', achievementRoutes);
}//..