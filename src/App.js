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
import useIsLoggedIn from './myComponents/IsLoggedIn';
import ProtectedRoute from './myComponents/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workout-log"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <WorkoutLog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress-tracker"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProgressTracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/achievements"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Achievements />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;