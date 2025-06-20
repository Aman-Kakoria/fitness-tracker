import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-dark text-light pt-4 pb-3 mt-auto"
      style={{ marginTop: '40px' }} // ⬅️ Moves the footer slightly upwards
    >
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>🏋️ FitTrack</h5>
            <p className="small">
              Success isn’t always about greatness. It’s about consistency.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/add" className="text-light text-decoration-none">Add Activity</a></li>
              <li><a href="/history" className="text-light text-decoration-none">History</a></li>
              <li><a href="/profile" className="text-light text-decoration-none">Profile</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="small mb-1">📧 support@fittrack.com</p>
            <p className="small mb-1">📍 Haryana, India</p>
            <div>
              <a href="#" className="text-light me-3">GitHub</a>
              <a href="#" className="text-light me-3">Instagram</a>
              <a href="#" className="text-light">Twitter</a>
            </div>
          </div>

        </div>

        <hr className="bg-light" />
        <div className="text-center small">
          © {new Date().getFullYear()} FitTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
