import React from 'react';
import './ProgressTracker.css';

export default function ProgressTracker() {
  return (
    <div className="container mt-5 progress-tracker">
      <div className="text-center mb-4">
        <h2 className="fw-bold">📊 Your Progress Tracker</h2>
        <p className="text-muted">Monitor your fitness journey over time</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Weekly Summary</h5>
              <p className="card-text">You've worked out 5 days this week!</p>
              <p className="text-success">🔥 Great consistency!</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Monthly Summary</h5>
              <p className="card-text">Total calories burned: 10,250 kcal</p>
              <p className="text-primary">🚀 Keep pushing your limits!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
