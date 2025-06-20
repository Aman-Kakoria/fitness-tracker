import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import
import './SignIn.css';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert(`Signed up with Phone: ${phone}`);
    } else {
      alert(`Logged in with Phone: ${phone}`);
      navigate("/dashboard"); // ✅ Redirect after login
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">
          {isSignUp ? 'Create Account' : 'Log In'}
        </button>

        <p className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? 'Already have an account? Log in'
            : "Don't have an account? Sign up"}
        </p>
      </form>
    </div>
  );
}
