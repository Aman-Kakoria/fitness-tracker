import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import MainPage from './myComponents/MainPage';
import SignIn from './myComponents/SignIn';
import Dashboard from './myComponents/Dashboard';
import WorkoutLog from './myComponents/WorkoutLog';
import ProgressTracker from './myComponents/ProgressTracker';
import Achievements from './myComponents/Achievements';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
