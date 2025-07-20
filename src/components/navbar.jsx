import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './navbar.css';
import FlightBooking from './FlightBooking.jsx';
import Login from './Login.jsx';
import Signup from './Register.jsx';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="landing">
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Travel Booking App</h1>
        </div>
        <h1 style={{color:'red',textAlign:'center', fontSize:'3vh'}}>Make your trip  <br/>more enjoyable😎</h1>
        <div className="right">
          <div className="dropdown">
            <button className="dropbtn">Location</button>
            <div className="dropdown-content">
              <a href="#">Hyderabad</a>
              <a href="#">USA</a>
              <a href="#">Delhi</a>
            </div>
          </div>
          <button className="nav-btn" onClick={toggleSignup}>Signup</button>
          <button className="nav-btn" onClick={toggleLogin}>Login</button>
        </div>
      </div>

      <FlightBooking />

      {/* Floating Modals */}
      {showLogin && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Login />
          </div>
        </div>
      )}

      {showSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Signup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
