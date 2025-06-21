import React from 'react'

export default function Header() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">🏋️ FitTrack</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Add Activity</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">History</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Sign In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
