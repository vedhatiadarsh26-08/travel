import React, { useState } from 'react';
import './Cab.css';

const Cabs = () => {
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [pickupDate, setPickupDate] = useState('2025-07-18');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [cabType, setCabType] = useState('Sedan');

  const cities = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Bangalore'];
  const cabTypes = ['Sedan', 'SUV', 'Mini', 'Luxury'];

  return (
    <div className="cab-booking-container">
      <div className="cab-trip-options">
        <label>
          <input
            type="radio"
            name="trip"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            name="trip"
            checked={tripType === 'round'}
            onChange={() => setTripType('round')}
          />
          Round Trip
        </label>
      </div>

      <div className="cab-form">
        <div className="form-section">
          <label htmlFor="from">From</label>
          <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="to">To</label>
          <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="date">Pickup Date</label>
          <input
            type="date"
            id="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="time">Pickup Time</label>
          <input
            type="time"
            id="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="cab">Cab Type</label>
          <select id="cab" value={cabType} onChange={(e) => setCabType(e.target.value)}>
            {cabTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="search-button">SEARCH CABS</button>
    </div>
  );
};

export default Cabs;
