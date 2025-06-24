import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { setRoutes } from './routes/index';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = 'mongodb+srv://aman:amanaman07@cluster0.r286hvp.mongodb.net/fittrack?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    setRoutes(app);

    app.get('/', (req, res) => {
      res.send('FitTrack backend is running');
    });

    // Listen on all interfaces for LAN access
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on http://192.168.1.4:${PORT} (your LAN IP)`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });