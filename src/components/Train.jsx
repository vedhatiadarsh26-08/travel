import React, { useState } from 'react';
import './Train.css';

const Train = () => {
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [travelDate, setTravelDate] = useState('2025-07-18');
  const [travelClass, setTravelClass] = useState('ALL');
  const [option, setOption] = useState('book');

  const stations = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Chennai'];
  const classes = ['ALL', 'Sleeper (SL)', 'AC 3 Tier (3A)', 'AC 2 Tier (2A)', 'First Class (1A)', 'Second Sitting (2S)'];

  return (
    <div className="train-booking-container">
      <div className="train-options">
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'book'}
            onChange={() => setOption('book')}
          />
          Book Train Tickets
        </label>
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'pnr'}
            onChange={() => setOption('pnr')}
          />
          Check PNR Status
        </label>
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'live'}
            onChange={() => setOption('live')}
          />
          Live Train Status
        </label>
      </div>

      <div className="train-form">
        <div className="form-section">
          <label htmlFor="from">From</label>
          <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
            {stations.map((station) => (
              <option key={station} value={station}>{station}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="to">To</label>
          <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
            {stations.map((station) => (
              <option key={station} value={station}>{station}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="date">Travel Date</label>
          <input
            type="date"
            id="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="class">Class</label>
          <select id="class" value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default Train;
