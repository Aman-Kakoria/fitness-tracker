import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>🏋️ Welcome to Your Dashboard</h2>
      <div className="dashboard-grid">

        {/* Block 1: Daily Workout Log */}
        <div className="dashboard-box">
          <h4>Daily Workout Log</h4>
          <p>Track your workouts daily.</p>
          <Link to="/workout-log">
            <button className="btn btn-success">Add Workout</button>
          </Link>
        </div>

        {/* Block 2: Progress Tracker */}
        <div className="dashboard-box">
          <h4>Progress Tracker</h4>
          <p>Monitor your weekly and monthly progress.</p>
          <Link to="/progress-tracker">
            <button className="btn btn-success">View Progress</button>
          </Link>
        </div>

        {/* Block 3: Achievements */}
        <div className="dashboard-box">
          <h4>Achievements</h4>
          <p>Celebrate milestones and goals reached!</p>
          <Link to="/achievements">
            <button className="btn btn-success">View Achievements</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
