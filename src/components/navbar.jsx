import React from 'react';
import logo from '../assets/logo.png'; 
import './navbar.css';
import bg from '../assets/bg.png';
import FlightBooking from './Flightbooking';
import login from './Login.jsx'
import Signup from './Register.jsx';



const Navbar = () => {
  return (
    <div className="landing" style={{}}>
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Travel Booking App</h1>
        </div>
        <div className="right">
          <div className="dropdown">
            <button className="dropbtn">Location</button>
            <div className="dropdown-content">
              <a href="#">Hyderabad</a>
              <a href="#">USA</a>
              <a href="#">Delhi</a>
            </div>
          </div>
          <button className="nav-btn" onClick={<Signup/>}>Signup</button>
          <button className="nav-btn" onClick={<login/>}>Login</button>
        </div>
      </div>
      <FlightBooking/>
      
    </div>
  );
};

export default Navbar;
