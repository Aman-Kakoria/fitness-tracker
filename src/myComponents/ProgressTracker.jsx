import React, { useEffect, useState } from 'react';
import './ProgressTracker.css';

function ProgressTracker() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('activities');
    if (stored) {
      setActivities(JSON.parse(stored));
    }
  }, []);

  const progress = [
    { label: "Workouts This Week", value: 5, goal: 7 },
    { label: "Total Distance (km)", value: 18, goal: 25 },
    { label: "Calories Burned", value: 3200, goal: 4000 },
    { label: "Water Intake (L)", value: 12, goal: 14 },
    { label: "Active Days This Month", value: 15, goal: 20 },
    { label: "Personal Best (Pushups)", value: 40, goal: 50 }
  ];

  return (
    <div className="progress-tracker">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Progress Tracker</h2>
        <p className="subtext">Monitor your fitness journey over time</p>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center">Activity History</h3>
            {activities.length === 0 ? (
              <p className="text-center">No activities logged yet.</p>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Duration (min)</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((act, idx) => (
                    <tr key={idx}>
                      <td>{act.date}</td>
                      <td>{act.type}</td>
                      <td>{act.duration}</td>
                      <td>{act.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center">Detailed Progress</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody>
                {progress.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                    <td>{item.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;
