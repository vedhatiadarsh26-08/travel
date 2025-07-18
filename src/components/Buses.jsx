import React, { useState } from 'react';
import './Buses.css';

const Buses = () => {
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [travelDate, setTravelDate] = useState('2025-07-18');
  const [busClass, setBusClass] = useState('ALL');
  const [option, setOption] = useState('book');

  const cities = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Bangalore'];
  const busClasses = ['ALL', 'AC', 'Non-AC', 'Sleeper', 'Seater'];

  return (
    <div className="bus-booking-container">
      <div className="bus-options">
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'book'}
            onChange={() => setOption('book')}
          />
          Book Bus Tickets
        </label>
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'track'}
            onChange={() => setOption('track')}
          />
          Track Bus
        </label>
        <label>
          <input
            type="radio"
            name="option"
            checked={option === 'cancel'}
            onChange={() => setOption('cancel')}
          />
          Cancel Ticket
        </label>
      </div>

      <div className="bus-form">
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
          <label htmlFor="date">Travel Date</label>
          <input
            type="date"
            id="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="class">Bus Type</label>
          <select id="class" value={busClass} onChange={(e) => setBusClass(e.target.value)}>
            {busClasses.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default Buses;
