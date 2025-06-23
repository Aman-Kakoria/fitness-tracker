import React from 'react';
import './ProgressTracker.css';

export default function ProgressTracker() {
  return (
    <div className="progress-tracker">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Progress Tracker</h2>
        <p className="subtext">Monitor your fitness journey over time</p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Weekly Summary */}
          <div className="col-md-6">
            <div className="card glass-card text-center p-4">
              <h4 className="card-title">Weekly Summary</h4>
              <p className="card-text">You've worked out <strong>5 days</strong> this week!</p>
              <p className="highlight success">Great consistency!</p>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="col-md-6">
            <div className="card glass-card text-center p-4">
              <h4 className="card-title">Monthly Summary</h4>
              <p className="card-text">Total calories burned: <strong>10,250 kcal</strong></p>
              <p className="highlight primary">Keep pushing your limits!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
