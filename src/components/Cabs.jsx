import React, { useState } from 'react';
import './Cab.css';

const Cabs = () => {
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [pickupDate, setPickupDate] = useState('2025-07-18');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [cabType, setCabType] = useState('Sedan');
  const [searchResults, setSearchResults] = useState([]);

  const cities = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Bangalore'];
  const cabTypes = ['Sedan', 'SUV', 'Mini', 'Luxury'];

  const cabList = [
    { id: 1, name: 'CityCab', from: 'New Delhi', to: 'Kanpur', type: 'Sedan', price: '₹1800' },
    { id: 2, name: 'GoTaxi', from: 'New Delhi', to: 'Kanpur', type: 'SUV', price: '₹2500' },
    { id: 3, name: 'MiniGo', from: 'Mumbai', to: 'Bangalore', type: 'Mini', price: '₹1500' },
    { id: 4, name: 'LuxuryRide', from: 'New Delhi', to: 'Kanpur', type: 'Luxury', price: '₹3500' },
  ];

  const handleSearch = () => {
    const filtered = cabList.filter(
      (cab) =>
        cab.from === from &&
        cab.to === to &&
        (cabType === 'ALL' || cab.type === cabType)
    );
    setSearchResults(filtered);
  };

  return (
    <div className="cab-booking-container">
      <h2 className="cab-title">Book Your Cab</h2>

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

      <button className="search-button" onClick={handleSearch}>SEARCH CABS</button>

      <div className="results-section">
        {searchResults.length > 0 ? (
          <div className="results-list">
            <h3>Available Cabs</h3>
            <ul>
              {searchResults.map((cab) => (
                <li key={cab.id}>
                  <strong>{cab.name}</strong> | {cab.type} | {cab.price}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No cabs found. Try changing the filters.</p>
        )}
      </div>
    </div>
  );
};

export default Cabs;
