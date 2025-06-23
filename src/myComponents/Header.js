import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          FitTrack
        </Link>

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
            <li className="nav-item">
              <Link className="nav-link btn-signin" to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
