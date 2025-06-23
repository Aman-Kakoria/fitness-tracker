import React from 'react';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="achievements">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Achievements</h2>
        <p className="subtext">Celebrate your hard-earned milestones</p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Achievement 1 */}
          <div className="col-md-4">
            <div className="card glass-card text-center p-4 border-success">
              <h4 className="card-title">First Workout</h4>
              <p className="card-text">You logged your first workout!</p>
            </div>
          </div>

          {/* Achievement 2 */}
          <div className="col-md-4">
            <div className="card glass-card text-center p-4 border-warning">
              <h4 className="card-title">1000 Calories Burned</h4>
              <p className="card-text">You crossed the 1,000 kcal mark!</p>
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="col-md-4">
            <div className="card glass-card text-center p-4 border-primary">
              <h4 className="card-title">Consistency Star</h4>
              <p className="card-text">Worked out 7 days in a row!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
