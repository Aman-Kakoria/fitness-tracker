import React, { useState } from 'react';
import './WorkoutLog.css';

export default function WorkoutLog() {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Workout Added:
Type: ${workoutType}
Duration: ${duration} mins
Intensity: ${intensity}
Date: ${date}`);
    // You can add your backend POST call here
  };

  return (
    <div className="workout-container container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">🏋️ Daily Workout Log</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Workout Type</label>
            <select
              className="form-select"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              required
            >
              <option value="">-- Select Workout --</option>
              <option>Running</option>
              <option>Yoga</option>
              <option>Cycling</option>
              <option>Gym</option>
              <option>Swimming</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Duration (minutes)</label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              min="1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Intensity</label>
            <select
              className="form-select"
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              required
            >
              <option value="">-- Select Intensity --</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Workout
          </button>
        </form>
      </div>
    </div>
  );
}
