import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Example: form submission or API call
    console.log('Login Attempt:', { email, password });

    // TODO: Replace with your API logic or redirect
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Login Successful!');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p className="register-link">Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
