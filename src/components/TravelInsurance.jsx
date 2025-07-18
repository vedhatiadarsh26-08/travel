import React, { useState } from 'react';
import './TravelInsurance.css';

const destinations = ['Thailand', 'UAE', 'USA', 'Indonesia', 'Vietnam'];

const TravelInsurance = () => {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [travelDates, setTravelDates] = useState({
    from: '2025-07-18',
    to: '2025-07-23'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [travellers, setTravellers] = useState([{ age: '' }]);
  const [showTravellerForm, setShowTravellerForm] = useState(false);
  const [plansVisible, setPlansVisible] = useState(false);

  const toggleDestination = (destination) => {
    setSelectedDestinations(prev =>
      prev.includes(destination)
        ? prev.filter(item => item !== destination)
        : [...prev, destination]
    );
  };

  const handleTravellerAgeChange = (index, value) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index].age = value;
    setTravellers(updatedTravellers);
  };

  const addTraveller = () => {
    setTravellers([...travellers, { age: '' }]);
  };

  const handleViewPlans = () => {
    if (selectedDestinations.length === 0) {
      alert('Please select at least one destination.');
      return;
    }
    if (!travellers.length || travellers.some(t => !t.age)) {
      alert('Please fill in the age of all travellers.');
      return;
    }
    if (travellers.some(t => parseInt(t.age) > 65)) {
      alert('Travellers above 65 are not covered.');
      return;
    }

    setPlansVisible(true);
  };

  const filteredDestinations = destinations.filter(dest =>
    dest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="insurance-container">
      <div className="insurance-left">
        <h1>International Travel + <br />Medical Insurance</h1>
        <p className="offered-by">
          Offered By <strong>HDFC ERGO</strong>, <strong>Reliance General Insurance</strong>, <strong>SYMBO</strong>
          <br />
          IRDAI Broker Registration No: 151, Valid up to 21/04/2027
        </p>
        <div className="insurance-feature">
          <img src="https://img.icons8.com/ios-filled/50/suitcase.png" alt="luggage icon" />
          <div>
            <h3>Comprehensive travel + medical insurance</h3>
            <p>Insurance policies covering country-specific visa requirements and Schengen Visa Compliant plans.</p>
          </div>
        </div>
      </div>

      <div className="insurance-right">
        <div className="banner">Insurance Premiums starting from as low as Rs. 32/day</div>

        <div className="destination-box">
          <h3>Travel Destination</h3>
          <p>You can select multiple destinations</p>

          <input
            type="text"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="destinations">
            {filteredDestinations.map((dest) => (
              <div
                key={dest}
                className={`destination ${selectedDestinations.includes(dest) ? 'selected' : ''}`}
                onClick={() => toggleDestination(dest)}
              >
                <input
                  type="checkbox"
                  checked={selectedDestinations.includes(dest)}
                  readOnly
                />
                <label>{dest}</label>
              </div>
            ))}
            <div className="destination">
              <input type="checkbox" disabled />
              <label>Other Country</label>
            </div>
          </div>

          <div className="travel-details">
            <div className="travel-date">
              <label>TRAVEL DATE</label>
              <input
                type="date"
                value={travelDates.from}
                onChange={(e) => setTravelDates({ ...travelDates, from: e.target.value })}
              />
              <span>to</span>
              <input
                type="date"
                value={travelDates.to}
                onChange={(e) => setTravelDates({ ...travelDates, to: e.target.value })}
              />
            </div>

            <div className="traveller-info">
              <label>TRAVELLERS & AGE</label>
              <button onClick={() => setShowTravellerForm(!showTravellerForm)}>
                {showTravellerForm ? 'Hide Travellers' : 'Select Travellers'}
              </button>
              <p>Senior citizens above 65 years are not covered.</p>
            </div>

            {showTravellerForm && (
              <div className="traveller-form">
                {travellers.map((traveller, index) => (
                  <div key={index}>
                    <label>Traveller {index + 1} Age:</label>
                    <input
                      type="number"
                      min="1"
                      max="65"
                      value={traveller.age}
                      onChange={(e) => handleTravellerAgeChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <button onClick={addTraveller}>+ Add Traveller</button>
              </div>
            )}
          </div>

          <button className="view-plans-btn" onClick={handleViewPlans}>VIEW PLANS</button>

          {plansVisible && (
            <div className="plans-box">
              <h4>Available Plans</h4>
              <ul>
                <li>🏥 HDFC Basic Plan - ₹500</li>
                <li>🧳 Reliance Premium Plan - ₹750</li>
                <li>🌍 SYMBO Global Plan - ₹1100</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;
