import React, { useState } from 'react';
import './Visa.css';

const Visa = () => {
  const [nationality, setNationality] = useState('India');
  const [destination, setDestination] = useState('USA');
  const [visaType, setVisaType] = useState('Tourist');
  const [travelDate, setTravelDate] = useState('2025-08-01');
  const [applicants, setApplicants] = useState(1);

  const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE'];
  const visaTypes = ['Tourist', 'Business', 'Student', 'Work', 'Transit'];

  return (
    <div className="visa-service-container">
      <h2 className="heading">Visa Services</h2>

      <div className="visa-form">
        <div className="form-section">
          <label htmlFor="nationality">Your Nationality</label>
          <select
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="destination">Destination Country</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="visaType">Visa Type</label>
          <select
            id="visaType"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
          >
            {visaTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="travelDate">Expected Travel Date</label>
          <input
            type="date"
            id="travelDate"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="applicants">No. of Applicants</label>
          <input
            type="number"
            id="applicants"
            min="1"
            value={applicants}
            onChange={(e) => setApplicants(e.target.value)}
          />
        </div>
      </div>

      <button className="submit-button">GET VISA INFO</button>
    </div>
  );
};

export default Visa;
