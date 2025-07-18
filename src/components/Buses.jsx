import React, { useState } from 'react';
import './Buses.css';

const Buses = () => {
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Kanpur');
  const [travelDate, setTravelDate] = useState('2025-07-18');
  const [busClass, setBusClass] = useState('ALL');
  const [option, setOption] = useState('book');
  const [searchResults, setSearchResults] = useState([]);

  const cities = ['New Delhi', 'Kanpur', 'Lucknow', 'Mumbai', 'Bangalore'];
  const busClasses = ['ALL', 'AC', 'Non-AC', 'Sleeper', 'Seater'];

  const busList = [
    { id: 1, from: 'New Delhi', to: 'Kanpur', class: 'AC', name: 'Rajdhani Travels', time: '08:00 AM' },
    { id: 2, from: 'New Delhi', to: 'Kanpur', class: 'Sleeper', name: 'Night Riders', time: '10:00 PM' },
    { id: 3, from: 'Lucknow', to: 'Mumbai', class: 'Non-AC', name: 'CityLink', time: '07:30 AM' },
    { id: 4, from: 'Mumbai', to: 'Bangalore', class: 'AC', name: 'GreenLine', time: '09:00 AM' },
    { id: 5, from: 'New Delhi', to: 'Kanpur', class: 'Seater', name: 'TravelExpress', time: '01:00 PM' },
  ];

  const handleSearch = () => {
    const filtered = busList.filter((bus) => {
      return (
        bus.from === from &&
        bus.to === to &&
        (busClass === 'ALL' || bus.class === busClass)
      );
    });

    setSearchResults(filtered);
  };

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

      <button className="search-button" onClick={handleSearch}>SEARCH</button>

      {/* Search Results */}
      <div className="results-section">
        {searchResults.length > 0 ? (
          <div className="results-list">
            <h3>Available Buses</h3>
            <ul>
              {searchResults.map((bus) => (
                <li key={bus.id}>
                  <strong>{bus.name}</strong> | {bus.class} | Departure: {bus.time}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No buses found. Try changing the filters.</p>
        )}
      </div>
    </div>
  );
};

export default Buses;
