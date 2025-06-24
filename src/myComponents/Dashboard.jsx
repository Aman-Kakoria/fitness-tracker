import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome to Your Fitness Dashboard</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h4>Daily Workout Log</h4>
          <p>Track your workouts daily.</p>
          <Link to="/workout-log">
            <button className="dashboard-btn">Add Workout</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h4>Progress Tracker</h4>
          <p>Monitor your weekly and monthly progress.</p>
          <Link to="/progress-tracker">
            <button className="dashboard-btn">View Progress</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h4>Achievements</h4>
          <p>Celebrate milestones and goals reached!</p>
          <Link to="/achievements">
            <button className="dashboard-btn">View Achievements</button>
          </Link>
        </div>

      </div>
    </div>
  );
}//...
