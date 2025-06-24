import React, { useState, useEffect } from 'react';
import './WorkoutLog.css';

export default function WorkoutLog() {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.4:3000/workout/history')
      .then(res => res.json())
      .then(data => setHistory(data));
  }, []);

  function calculateCalories(type, duration, intensity) {
    const metTable = {
      running: 9.8,
      cycling: 7.5,
      walking: 3.8,
      pushups: 8.0,
      yoga: 3.0,
      gym: 6.0,
      swimming: 8.0,
      other: 5.0
    };
    const intensityFactor = {
      low: 0.8,
      medium: 1,
      high: 1.2
    };
    const weight = 70; // average weight in kg

    const met = metTable[type?.toLowerCase()] || metTable.other;
    const factor = intensityFactor[intensity?.toLowerCase()] || 1;
    return Math.round(met * weight * (duration / 60) * factor);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calories = calculateCalories(workoutType, Number(duration), intensity);
    const workout = {
      type: workoutType,
      duration: Number(duration),
      intensity,
      date,
      calories
    };
    const res = await fetch('http://192.168.1.4:3000/workout/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    });
    if (res.ok) {
      setWorkoutType('');
      setDuration('');
      setIntensity('');
      setDate(new Date().toISOString().split('T')[0]);
      fetch('http://192.168.1.4:3000/workout/history')
        .then(res => res.json())
        .then(data => setHistory(data));
    }
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
              <option>Walking</option>
              <option>Pushups</option>
              <option>Other</option>
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

        <h3 className="mt-4">Workout History</h3>
        {history.length === 0 ? (
          <p>No workouts yet.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Intensity</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {history.map((w, idx) => (
                <tr key={idx}>
                  <td>{w.date}</td>
                  <td>{w.type}</td>
                  <td>{w.duration}</td>
                  <td>{w.intensity}</td>
                  <td>{w.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
