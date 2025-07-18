import React, { useState } from 'react';
import './Train.css';

const Train = () => {
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [travelDate, setTravelDate] = useState('2025-07-18');
  const [travelClass, setTravelClass] = useState('ALL');
  const [option, setOption] = useState('book');
  const [searchResults, setSearchResults] = useState([]);

  const stations = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Chennai'];
  const classes = ['ALL', 'Sleeper (SL)', 'AC 3 Tier (3A)', 'AC 2 Tier (2A)', 'First Class (1A)', 'Second Sitting (2S)'];

  const trainList = [
    {
      id: 1,
      name: 'Shatabdi Express',
      from: 'New Delhi',
      to: 'Kanpur',
      class: 'AC 2 Tier (2A)',
      time: '08:30 AM',
    },
    {
      id: 2,
      name: 'Lucknow Mail',
      from: 'New Delhi',
      to: 'Kanpur',
      class: 'Sleeper (SL)',
      time: '10:00 PM',
    },
    {
      id: 3,
      name: 'Rajdhani Express',
      from: 'Mumbai',
      to: 'Chennai',
      class: 'First Class (1A)',
      time: '06:45 AM',
    },
    {
      id: 4,
      name: 'Gomti Express',
      from: 'Lucknow',
      to: 'Kanpur',
      class: 'Second Sitting (2S)',
      time: '09:15 AM',
    },
    {
      id: 5,
      name: 'Intercity Express',
      from: 'New Delhi',
      to: 'Kanpur',
      class: 'AC 3 Tier (3A)',
      time: '04:30 PM',
    },
  ];

  const handleSearch = () => {
    const filtered = trainList.filter(train =>
      train.from === from &&
      train.to === to &&
      (travelClass === 'ALL' || train.class === travelClass)
    );
    setSearchResults(filtered);
  };

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

      <button className="search-button" onClick={handleSearch}>SEARCH</button>

      {/* Search Results */}
      <div className="results-section">
        {searchResults.length > 0 ? (
          <div className="results-list">
            <h3>Available Trains</h3>
            <ul>
              {searchResults.map(train => (
                <li key={train.id}>
                  <strong>{train.name}</strong> | {train.class} | Departure: {train.time}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No trains found. Try changing your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Train;
