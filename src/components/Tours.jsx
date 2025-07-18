import React, { useState } from 'react';
import './Tours.css';

const Tours = () => {
  const [destination, setDestination] = useState('New Delhi');
  const [category, setCategory] = useState('Sightseeing');
  const [tourDate, setTourDate] = useState('2025-07-20');
  const [travelers, setTravelers] = useState(2);

  const destinations = ['New Delhi', 'Agra', 'Jaipur', 'Goa', 'Manali'];
  const categories = ['Sightseeing', 'Adventure', 'Cultural', 'Wildlife', 'Water Activities'];

  return (
    <div className="tour-booking-container">
      <h2 className="heading">Book Tours & Attractions</h2>

      <div className="tour-form">
        <div className="form-section">
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {destinations.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="date">Tour Date</label>
          <input
            type="date"
            id="date"
            value={tourDate}
            onChange={(e) => setTourDate(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="travelers">Travelers</label>
          <input
            type="number"
            id="travelers"
            min="1"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>
      </div>

      <button className="search-button">SEARCH TOURS</button>
    </div>
  );
};

export default Tours;
