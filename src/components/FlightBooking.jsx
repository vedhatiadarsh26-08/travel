import React, { useState } from 'react';
import './FlightBooking.css';
import PartnerSection from './PartnersSection.jsx';
import Hotels from './Hotels.jsx';
import VillaBooking from './Villas.jsx';
import Holiday from './Holiday.jsx';
import Train from './Train.jsx';
import Buses from './Buses.jsx';
import Cabs from './Cabs.jsx';
import Tours from './Tours.jsx';
import Visa from './visa.jsx';
import TravelInsurance from './TravelInsurance.jsx';
import CruiseBooking from './CruiseBooking.jsx';

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [showDetails, setShowDetails] = useState(false);

  // Track form input values
  const [flightForm, setFlightForm] = useState({
    from: 'delhi',
    to: 'bangloor',
    date: '17 Jul\'25',
    day: 'Thursday',
    travellers: '1 Traveller',
    flightClass: 'Economy/Premium Economy',
    fare: 'Regular',
  });

  const handleInputChange = (field, value) => {
    setFlightForm(prev => ({ ...prev, [field]: value }));
  };

  const tabContents = {
    Flights: (
      <>
        <div className="trip-type">
          <label><input type="radio" name="trip" defaultChecked /> One Way</label>
          <label><input type="radio" name="trip" /> Round Trip</label>
          <label><input type="radio" name="trip" /> Multi City</label>
        </div>

        <div className="input-row">
          <div className="input-box">
            <label>From</label>
            <select onChange={e => handleInputChange('from', e.target.value)} value={flightForm.from}>
              <option value="hyderabad">Hyderabad</option>
              <option value="delhi">Delhi</option>
              <option value="bangloor">Bangalore</option>
              <option value="viza">Vizag</option>
              <option value="mumbai">Mumbai</option>
            </select>
            <p>{flightForm.from.toUpperCase()}, {flightForm.from} Airport</p>
          </div>
          <div className="swap">⇄</div>
          <div className="input-box">
            <label>To</label>
            <select onChange={e => handleInputChange('to', e.target.value)} value={flightForm.to}>
              <option value="hyderabad">Hyderabad</option>
              <option value="delhi">Delhi</option>
              <option value="bangloor">Bangalore</option>
              <option value="viza">Vizag</option>
              <option value="mumbai">Mumbai</option>
            </select>
            <p>{flightForm.to.toUpperCase()}, {flightForm.to} Airport</p>
          </div>
          <div className="input-box">
            <label>Departure</label>
            <h2>{flightForm.date}</h2>
            <p>{flightForm.day}</p>
          </div>
          <div className="input-box">
            <label>Return</label>
            <p className="placeholder">Tap to add a return date</p>
          </div>
          <div className="input-box">
            <label>Travellers & Class</label>
            <h2>{flightForm.travellers}</h2>
            <p>{flightForm.flightClass}</p>
          </div>
        </div>

        <div className="trip-type">
          <span className="extra-savings">EXTRA SAVINGS</span>
          {['Regular', 'Student', 'Senior Citizen', 'Armed Forces', 'Doctor and Nurses'].map((label, index) => (
            <label key={index} className="fare-option">
              <input
                type="radio"
                name="fare"
                value={label}
                defaultChecked={index === 0}
                onChange={() => handleInputChange('fare', label)}
              />
              <div className="fare-label">
                <strong>{label}</strong>
                {index !== 0 && <span>Up to ₹600 off</span>}
              </div>
            </label>
          ))}
        </div>

        <div className="flexifly">
          <input type="checkbox" />
          <span>Add FlexiFly - 100% refund on cancellation or Zero date change charges</span>
          <a href="#">View Details</a>
        </div>

        <div className="search-button">
          <button onClick={() => setShowDetails(true)}>SEARCH</button>
        </div>

        {showDetails && (
          <div className="result-box">
            <h3>✈️ Flight Summary</h3>
            <p><strong>From:</strong> {flightForm.from.toUpperCase()}</p>
            <p><strong>To:</strong> {flightForm.to.toUpperCase()}</p>
            <p><strong>Departure:</strong> {flightForm.date}, {flightForm.day}</p>
            <p><strong>Traveller:</strong> {flightForm.travellers} | {flightForm.flightClass}</p>
            <p><strong>Fare Type:</strong> {flightForm.fare}</p>
            <p><strong>Fare:</strong> ₹4,800</p>

            <div className="result-actions">
              <button className="pay-btn">Proceed to Payment</button>
              <button className="cancel-btn" onClick={() => setShowDetails(false)}>Cancel</button>
            </div>
          </div>
        )}

        <PartnerSection />
      </>
    ),

    Hotels: (
      <div className="tab-content">
        <h2>🏨 Hotels Booking</h2>
        <p>Search and book hotels here.</p>
        <Hotels />
      </div>
    ),
    'Homestays & Villas': <div className="tab-content"><h2>🏡 Homestays & Villas</h2><p><VillaBooking />.</p></div>,
    'Holiday Packages': <div className="tab-content"><h2>🌴 Holiday Packages</h2><Holiday /></div>,
    Trains: <div className="tab-content"><h2>🚆 Trains</h2><Train /></div>,
    Buses: <div className="tab-content"><h2>🚌 Buses</h2><p><Buses />.</p></div>,
    Cabs: <div className="tab-content"><h2>🚖 Cabs</h2><p><Cabs/>.</p></div>,
    'Tours & Attractions': <div className="tab-content"><h2>🎟️ Tours & Attractions</h2><p><Tours/>.</p></div>,
    Visa: <div className="tab-content"><h2>🛂 Visa Services</h2><p><Visa/></p></div>,
    Cruise: <div className="tab-content"><h2>🛳️ Cruises</h2><p><CruiseBooking/>.</p></div>,
    'Travel Insurance': <div className="tab-content"><h2>🛡️ Travel Insurance</h2><p><TravelInsurance/>  .</p></div>,
  };

  const tabs = Object.keys(tabContents);

  return (
    <div className="booking-container">
      <div className="tab-section">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab);
              setShowDetails(false);
            }}
          >
            <span className="tab-label">{tab}</span>
          </div>
        ))}
      </div>

      <div className="tab-body">{tabContents[activeTab]}</div>
    </div>
  );
};

export default FlightBooking;
