import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { setRoutes } from './routes/index';
import IndexController from './controllers/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = 'mongodb://localhost:27017/fittrack';

const indexController = new IndexController();

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    setRoutes(app);

    app.get('/', indexController.getIndex);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });//..