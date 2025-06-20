import React from 'react';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="container mt-5 achievements">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🏆 Your Achievements</h2>
        <p className="text-muted">Celebrate your hard-earned milestones</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-light border-success shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">First Workout</h5>
              <p className="card-text">🎉 You logged your first workout!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-light border-warning shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">1000 Calories Burned</h5>
              <p className="card-text">🔥 You crossed 1,000 kcal mark!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-light border-primary shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Consistency Star</h5>
              <p className="card-text">💪 Worked out 7 days in a row!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
