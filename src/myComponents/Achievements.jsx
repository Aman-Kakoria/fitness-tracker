import React, { useEffect, useState } from 'react';
import './Achievements.css';

// List of all possible achievements
const ALL_ACHIEVEMENTS = [
  {
    key: 'consistent_30',
    title: 'Consistent for 30 Days',
    description: 'Logged workouts on 30 different days!',
  },
  {
    key: 'calories_10k',
    title: '10,000 Calories Burned',
    description: 'You have burned 10,000 calories!',
  },
  {
    key: 'calories_50k',
    title: 'Medal: 50,000 Calories Burned',
    description: '🏅 Incredible! You have burned 50,000 calories!',
  },
];

export default function Achievements() {
  const [unlocked, setUnlocked] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/achievement/unlocked')
      .then(res => res.json())
      .then(data => setUnlocked(data.map(a => a.title)));
  }, []);

  return (
    <div className="achievements">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Achievements</h2>
        <p className="subtext">Unlock achievements as you progress!</p>
      </div>
      <div className="container">
        <ul className="list-group">
          {ALL_ACHIEVEMENTS.map((ach, idx) => {
            const isUnlocked = unlocked.includes(ach.title);
            return (
              <li
                key={idx}
                className={`list-group-item glass-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                style={{
                  opacity: isUnlocked ? 1 : 0.6,
                  fontWeight: isUnlocked ? 'bold' : 'normal',
                }}
              >
                <span className="card-title">
                  {ach.title}
                  {isUnlocked ? ' ✅' : ' 🔒'}
                </span>
                <span className="card-text">{ach.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
