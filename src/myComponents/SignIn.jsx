import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn({ setIsLoggedIn }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const url = isSignUp
      ? 'http://localhost:3000/auth/signup'
      : 'http://localhost:3000/auth/signin';
    const payload = isSignUp
      ? { name, phone, password }
      : { phone, password };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('authToken', data.token);
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        alert(data.error || 'Authentication failed');
      }
    } catch (err) {
      alert('Server error');
    }
  }

  return (
    <div className="glass-signin-wrapper">
      <form className="glass-signin-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        {isSignUp && (
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="glass-button">
          {isSignUp ? 'Create Account' : 'Log In'}
        </button>
        <p className="switch-text" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </p>
      </form>
    </div>
  );
}

export default SignIn;
