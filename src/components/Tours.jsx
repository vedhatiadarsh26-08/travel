import React, { useState } from 'react';
import './Tours.css';

const Tours = () => {
  const [destination, setDestination] = useState('New Delhi');
  const [category, setCategory] = useState('Sightseeing');
  const [tourDate, setTourDate] = useState('2025-07-20');
  const [travelers, setTravelers] = useState(2);
  const [results, setResults] = useState([]);

  const destinations = ['New Delhi', 'Agra', 'Jaipur', 'Goa', 'Manali'];
  const categories = ['Sightseeing', 'Adventure', 'Cultural', 'Wildlife', 'Water Activities'];

  const tourData = [
    { id: 1, city: 'New Delhi', type: 'Sightseeing', name: 'Delhi Heritage Walk' },
    { id: 2, city: 'Agra', type: 'Sightseeing', name: 'Taj Mahal Visit' },
    { id: 3, city: 'Goa', type: 'Water Activities', name: 'Snorkeling in Goa' },
    { id: 4, city: 'Manali', type: 'Adventure', name: 'Snow Trekking' },
    { id: 5, city: 'Jaipur', type: 'Cultural', name: 'Palace & Fort Tour' },
  ];

  const handleSearch = () => {
    const filtered = tourData.filter(
      (tour) => tour.city === destination && tour.type === category
    );
    setResults(filtered);
  };

  return (
    <div className="tour-booking-container">
      <h2 className="heading">Book Tours & Attractions</h2>

      <div className="tour-form">
        <div className="form-section">
          <label htmlFor="destination">Destination</label>
          <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            {destinations.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="date">Tour Date</label>
          <input type="date" id="date" value={tourDate} onChange={(e) => setTourDate(e.target.value)} />
        </div>

        <div className="form-section">
          <label htmlFor="travelers">Travelers</label>
          <input type="number" id="travelers" min="1" value={travelers} onChange={(e) => setTravelers(e.target.value)} />
        </div>
      </div>

      <button className="search-button" onClick={handleSearch}>SEARCH TOURS</button>

      {results.length > 0 && (
        <div className="tour-results">
          <h3>Available Tours</h3>
          <ul>
            {results.map((tour) => (
              <li key={tour.id}>{tour.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tours;
