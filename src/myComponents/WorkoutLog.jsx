import React, { useState } from 'react';
import './WorkoutLog.css';

export default function WorkoutLog() {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Workout Added:\nType: ${workoutType}\nDuration: ${duration} mins\nIntensity: ${intensity}\nDate: ${date}`);
    // TODO: Integrate with backend
  };

  return (
    <div className="workout-bg">
      <div className="workout-glass">
        <h2 className="title">Workout Log</h2>
        <p className="subtitle">Track your fitness journey</p>

        <form onSubmit={handleSubmit} className="workout-form">
          <div className="form-group">
            <label>Workout Type</label>
            <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} required>
              <option value="">Choose Workout</option>
              <option>Running</option>
              <option>Yoga</option>
              <option>Cycling</option>
              <option>Gym</option>
              <option>Swimming</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duration (minutes)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter duration"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label>Intensity</label>
            <select value={intensity} onChange={(e) => setIntensity(e.target.value)} required>
              <option value="">Select Intensity</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="glass-button">
            Add Workout
          </button>
        </form>
      </div>
    </div>
  );
}
