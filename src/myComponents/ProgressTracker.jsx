import React, { useEffect, useState } from 'react';
import './ProgressTracker.css';

function ProgressTracker() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workout/history')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  const now = new Date();//.....
  const weekAgo = new Date();
  weekAgo.setDate(now.getDate() - 7);

  const workoutsThisWeek = workouts.filter(w => {
    const workoutDate = new Date(w.date);
    return workoutDate >= weekAgo && workoutDate <= now;
  }).length;

  const totalCalories = workouts.reduce((sum, w) => sum + (Number(w.calories) || 0), 0);

  const totalDistance = workouts
    .filter(w => w.type && (w.type.toLowerCase() === 'running' || w.type.toLowerCase() === 'cycling'))
    .reduce((sum, w) => sum + (Number(w.distance) || 0), 0);

  const totalDuration = workouts.reduce((sum, w) => sum + (Number(w.duration) || 0), 0);

  const activeDays = new Set(workouts.map(w => w.date)).size;

  const progress = [
    { label: "Workouts This Week", value: workoutsThisWeek, goal: 7 },
    { label: "Total Calories Burned", value: totalCalories, goal: 4000 },
    { label: "Total Distance (km)", value: totalDistance, goal: 25 },
    { label: "Total Duration (min)", value: totalDuration, goal: 600 },
    { label: "Active Days", value: activeDays, goal: 20 }
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
            <h3 className="text-center">Workout History</h3>
            {workouts.length === 0 ? (
              <p className="text-center">No workouts logged yet.</p>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Duration (min)</th>
                    <th>Intensity</th>
                    <th>Calories</th>
                    <th>Distance (km)</th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.map((w, idx) => (
                    <tr key={idx}>
                      <td>{w.date}</td>
                      <td>{w.type}</td>
                      <td>{w.duration}</td>
                      <td>{w.intensity}</td>
                      <td>{w.calories || '-'}</td>
                      <td>{w.distance || '-'}</td>
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

export default ProgressTracker;//......