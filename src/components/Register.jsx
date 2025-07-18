import React from 'react';
import './Login.css';

const Register = () => {
  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" name="" id="" placeholder='enter your mobile number' />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p className="switch-link">Already have an account? <a href="#">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
