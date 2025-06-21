import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  const images = [
    '/image.png',
    '/img22.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const navigate = useNavigate(); // ✅ Navigation hook

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Redirect function
  const handleContinue = () => {
    if (gender && goal) {
      navigate("/signin"); // Redirects to SignIn page
    }
  };

  return (
    <main
      className="main-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="main-box text-center">
        <h2 className="mb-4">Welcome to FitTrack 🏋️</h2>
        <p className="lead">
          Track your workouts, stay healthy, and achieve your goals.
        </p>

        <div className="my-4">
          <h4>🔥 1345 Clients have joined FitTrack!</h4>
        </div>

        <div className="mb-4 text-start">
          <h5>Choose your gender:</h5>
          {['Male', 'Female', 'Other'].map((g) => (
            <div className="form-check" key={g}>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value={g}
                id={g}
                checked={gender === g}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor={g}>{g}</label>
            </div>
          ))}
        </div>

        <div className="mb-4 text-start">
          <h5>Select your goal:</h5>
          <select
            className="form-select"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">-- Select Goal --</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Stay Fit">Stay Fit</option>
            <option value="Improve Stamina">Improve Stamina</option>
          </select>
        </div>

        {gender && goal && (
          <div className="alert alert-success mt-4" role="alert">
            You selected <strong>{gender}</strong> and your goal is <strong>{goal}</strong>.
          </div>
        )}

        <div className="text-center">
          <button
            className="btn btn-success mt-3 px-4"
            disabled={!gender || !goal}
            onClick={handleContinue} // ✅ redirects to /signin
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
