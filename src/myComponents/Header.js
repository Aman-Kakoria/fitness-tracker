import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/signin');
  }

  return (
    <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">FitTrack</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workout-log">Add Activity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/progress-tracker">Progress</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/achievements">Achievements</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {!isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link btn-signin" to="/signin">Sign In</Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn-signin" onClick={handleSignOut}>Sign Out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;//...
