import React, { useState } from 'react';
import './CruiseBooking.css';

const cruisePorts = [
  'Mumbai',
  'Goa',
  'Kochi',
  'Dubai',
  'Singapore',
  'Maldives',
  'Bangkok',
  'Colombo',
  'Abu Dhabi',
  'Penang'
];

const CruiseBooking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (from && to && from !== to && startDate) {
      setShowResults(true);
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className="cruise-container">
      <h2>Book Domestic and International Cruises</h2>
      <div className="form-section">
        <div className="input-box">
          <label>From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Select Start Port</option>
            {cruisePorts.map(port => (
              <option key={port} value={port}>{port}</option>
            ))}
          </select>
        </div>

        <div className="input-box">
          <label>To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Select Destination Port</option>
            {cruisePorts.map(port => (
              <option key={port} value={port}>{port}</option>
            ))}
          </select>
        </div>

        <div className="input-box">
          <label>Departure Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>Search Cruises</button>
      </div>

      {showResults && (
        <div className="result-box">
          <h3>Cruise Details</h3>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Departure Date:</strong> {startDate}</p>
          <button className="book-btn">Book Now</button>
          <button className="cancel-btn" onClick={() => setShowResults(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CruiseBooking;
