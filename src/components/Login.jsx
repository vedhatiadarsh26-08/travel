import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="switch-link">Don't have an account? <a href="#">Signup</a></p>
      </form>
    </div>
  );
};

export default Login;
