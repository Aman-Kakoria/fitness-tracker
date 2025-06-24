import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="container text-center text-md-start py-4">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">FitTrack</h5>
            <p className="small mb-0">
              Success isn’t always about greatness.<br />
              It’s about consistency.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/add" className="footer-link">Add Activity</a></li>
              <li><a href="/history" className="footer-link">History</a></li>
              <li><a href="/profile" className="footer-link">Profile</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Contact</h6>
            <p className="small mb-1">support@fittrack.com</p>
            <p className="small mb-2">Haryana, India</p>
            <div>
              <a href="#" className="footer-link me-3">GitHub</a>
              <a href="#" className="footer-link me-3">Instagram</a>
              <a href="#" className="footer-link">Twitter</a>
            </div>
          </div>

        </div>
        <hr className="footer-hr" />
        <div className="text-center small">
          © {new Date().getFullYear()} FitTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
