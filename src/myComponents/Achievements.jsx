import React from 'react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    { title: "First Workout", desc: "Logged your first workout!" },
    { title: "Consistency Champ", desc: "Worked out 7 days in a row!" },
    { title: "Early Bird", desc: "Completed a workout before 7am!" },
    { title: "Marathoner", desc: "Ran a total of 42km!" },
    { title: "Strength Builder", desc: "Lifted a total of 1000kg!" },
    { title: "Hydration Hero", desc: "Logged water intake for 30 days!" },
    { title: "Goal Crusher", desc: "Achieved your monthly goal!" },
  ];

  return (
    <div className="achievements">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Achievements</h2>
        <p className="subtext">Celebrate your hard-earned milestones</p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Achievement List */}
          <div className="col-md-8">
            <ul className="list-group">
              {achievements.map((ach, idx) => (
                <li key={idx} className="list-group-item">
                  <strong>{ach.title}</strong>
                  <div>{ach.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
