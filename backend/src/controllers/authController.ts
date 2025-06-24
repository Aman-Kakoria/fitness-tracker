import { Request, Response } from 'express';
import User from '../models/User';

export class AuthController {
  async signUp(req: Request, res: Response) {
    const { name, phone, password } = req.body;
    try {
      const existing = await User.findOne({ phone });
      if (existing) {
        return res.status(400).json({ error: 'User already exists' });
      }
      const user = new User({ name, phone, password });
      await user.save();
      res.json({ message: 'Sign up successful', token: 'dummy_token' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async signIn(req: Request, res: Response) {
    const { phone, password } = req.body;
    try {
      const user = await User.findOne({ phone, password });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      res.json({ message: 'Sign in successful', token: 'dummy_token' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
}