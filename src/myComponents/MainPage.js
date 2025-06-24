import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  const images = ['/image.png', '/img22.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    if (gender && goal) {
      navigate('/signin');
    }
  };

  return (
    <main
      className="main-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="main-glass-box">
        <h2>Welcome to FitTrack</h2>
        <p className="tagline">Track workouts, stay healthy & crush your goals!</p>

        <div className="join-stats">1345 users joined FitTrack</div>

        <div className="form-section">
          <label>Choose your gender:</label>
          <div className="radio-group">
            {['Male', 'Female', 'Other'].map((g) => (
              <label key={g} className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Select your goal:</label>
          <select
            className="goal-select"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">-- Choose Goal --</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Stay Fit">Stay Fit</option>
            <option value="Improve Stamina">Improve Stamina</option>
          </select>
        </div>

        {gender && goal && (
          <div className="selection-msg">
            You selected <strong>{gender}</strong> & goal <strong>{goal}</strong>.
          </div>
        )}

        <button
          className="continue-btn"
          onClick={handleContinue}
          disabled={!gender || !goal}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
