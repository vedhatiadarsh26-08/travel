import React, { useState } from 'react';
import './TravelInsurance.css';

const destinations = ['Thailand', 'UAE', 'USA', 'Indonesia', 'Vietnam'];

const TravelInsurance = () => {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [travelDates, setTravelDates] = useState({
    from: '2025-07-18',
    to: '2025-07-23'
  });

  const toggleDestination = (destination) => {
    setSelectedDestinations(prev =>
      prev.includes(destination)
        ? prev.filter(item => item !== destination)
        : [...prev, destination]
    );
  };

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
          <div className="destinations">
            {destinations.map((dest) => (
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
              <button>Select Travellers</button>
              <p>Senior citizens above 65 years are not covered.</p>
            </div>
          </div>

          <button className="view-plans-btn">VIEW PLANS</button>
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;
