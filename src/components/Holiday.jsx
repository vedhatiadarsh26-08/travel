import React, { useState } from 'react';
import './Holiday.css'; // Import the CSS file

const Holiday = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    destination: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: [], // Array to store child ages
    infants: 0,
    accommodationType: 'Hotels', // Default selection
    tripType: 'Round Trip', // Default selection
    cabinClass: 'Economy', // Default selection
    addCarRental: false,
    carPickupLocation: '',
    carPickupDate: '',
    carPickupTime: '',
    carDropoffLocation: '',
    carDropoffDate: '',
    carDropoffTime: '',
    browseActivities: false,
  });

  // State to manage UI elements like showing results (not fully implemented here, just for demo)
  const [showResults, setShowResults] = useState(false);

  // Handle changes for all input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle adding a new child
  const handleAddChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { age: '' }] // Add a new child with empty age
    }));
  };

  // Handle removing a child
  const handleRemoveChild = (index) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  // Handle changing a child's age
  const handleChildAgeChange = (index, value) => {
    const newChildren = [...formData.children];
    newChildren[index].age = value;
    setFormData(prev => ({
      ...prev,
      children: newChildren
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this formData to an API
    console.log('Holiday Search Data:', formData);
    setShowResults(true); // For demo, just show some mock results
    alert('Search initiated! Check console for data.');
    // You would typically navigate to a results page or display results here
  };

  return (
    <div className="holiday-booking-container">
      <h2>Plan Your Perfect Holiday</h2>
      <form className="holiday-form" onSubmit={handleSubmit}>

        {/* I. Destination & Dates */}
        <section className="form-section">
          <h3>Where & When</h3>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="e.g., Paris, Maldives, New York"
              value={formData.destination}
              onChange={handleChange}
              required
            />
            <small>Enter a city, region, or specific hotel/resort.</small>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkInDate">Check-in Date</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
              />
              <small>Select your arrival date.</small>
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-out Date</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                min={formData.checkInDate} // Prevent selecting dates before check-in
                required
              />
              <small>Select your departure date.</small>
            </div>
          </div>
        </section>

        {/* II. Travelers */}
        <section className="form-section">
          <h3>Who's Traveling?</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="adults">Adults</label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="infants">Infants (Under 2)</label>
              <input
                type="number"
                id="infants"
                name="infants"
                value={formData.infants}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Children ({formData.children.length})</label>
            {formData.children.map((child, index) => (
              <div key={index} className="child-input-group">
                <select
                  value={child.age}
                  onChange={(e) => handleChildAgeChange(index, e.target.value)}
                  required
                >
                  <option value="">Select Age</option>
                  {[...Array(18).keys()].map(i => ( // Ages 0-17
                    <option key={i} value={i}>{i === 0 ? 'Under 1' : i}</option>
                  ))}
                </select>
                <button type="button" onClick={() => handleRemoveChild(index)} className="remove-child-btn">
                  &times; Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddChild} className="add-child-btn">
              + Add Child
            </button>
          </div>
        </section>

        {/* III. Travel Type/Preferences */}
        <section className="form-section">
          <h3>Travel Preferences</h3>
          <div className="form-group">
            <label>Accommodation Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="accommodationType"
                  value="Hotels"
                  checked={formData.accommodationType === 'Hotels'}
                  onChange={handleChange}
                /> Hotels
              </label>
              <label>
                <input
                  type="radio"
                  name="accommodationType"
                  value="Resorts"
                  checked={formData.accommodationType === 'Resorts'}
                  onChange={handleChange}
                /> Resorts
              </label>
              <label>
                <input
                  type="radio"
                  name="accommodationType"
                  value="Apartments/Villas"
                  checked={formData.accommodationType === 'Apartments/Villas'}
                  onChange={handleChange}
                /> Apartments/Villas
              </label>
              {/* Add more types as needed */}
            </div>
          </div>

          <div className="form-group">
            <label>Flight Preferences</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="Round Trip"
                  checked={formData.tripType === 'Round Trip'}
                  onChange={handleChange}
                /> Round Trip
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="One Way"
                  checked={formData.tripType === 'One Way'}
                  onChange={handleChange}
                /> One Way
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="Multi-City"
                  checked={formData.tripType === 'Multi-City'}
                  onChange={handleChange}
                /> Multi-City
              </label>
            </div>
            <label htmlFor="cabinClass">Cabin Class</label>
            <select
              id="cabinClass"
              name="cabinClass"
              value={formData.cabinClass}
              onChange={handleChange}
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div className="form-group">
            <label className="checkbox-group">
              <input
                type="checkbox"
                name="addCarRental"
                checked={formData.addCarRental}
                onChange={handleChange}
              /> Add Car Rental
            </label>
            {formData.addCarRental && (
              <div className="car-rental-fields">
                <div className="form-group">
                  <label htmlFor="carPickupLocation">Pickup Location</label>
                  <input
                    type="text"
                    id="carPickupLocation"
                    name="carPickupLocation"
                    value={formData.carPickupLocation}
                    onChange={handleChange}
                    placeholder="e.g., Airport, Downtown"
                    required={formData.addCarRental}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="carPickupDate">Pickup Date</label>
                    <input
                      type="date"
                      id="carPickupDate"
                      name="carPickupDate"
                      value={formData.carPickupDate}
                      onChange={handleChange}
                      min={formData.checkInDate} // Suggest dates around holiday dates
                      required={formData.addCarRental}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="carPickupTime">Pickup Time</label>
                    <input
                      type="time"
                      id="carPickupTime"
                      name="carPickupTime"
                      value={formData.carPickupTime}
                      onChange={handleChange}
                      required={formData.addCarRental}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="carDropoffLocation">Drop-off Location</label>
                  <input
                    type="text"
                    id="carDropoffLocation"
                    name="carDropoffLocation"
                    value={formData.carDropoffLocation}
                    onChange={handleChange}
                    placeholder="Same as pickup or different"
                    required={formData.addCarRental}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="carDropoffDate">Drop-off Date</label>
                    <input
                      type="date"
                      id="carDropoffDate"
                      name="carDropoffDate"
                      value={formData.carDropoffDate}
                      onChange={handleChange}
                      min={formData.carPickupDate} // Must be after pickup date
                      required={formData.addCarRental}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="carDropoffTime">Drop-off Time</label>
                    <input
                      type="time"
                      id="carDropoffTime"
                      name="carDropoffTime"
                      value={formData.carDropoffTime}
                      onChange={handleChange}
                      required={formData.addCarRental}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="checkbox-group">
              <input
                type="checkbox"
                name="browseActivities"
                checked={formData.browseActivities}
                onChange={handleChange}
              /> Browse Activities & Tours
            </label>
          </div>
        </section>

        {/* IV. Search Button */}
        <button type="submit" className="search-button">
          Search Holidays
        </button>
      </form>

      {/* Optional: Display mock results or a confirmation message */}
      {showResults && (
        <div className="mock-results">
          <h3>Your Search Initiated!</h3>
          <p>We are searching for holidays based on your criteria:</p>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <p>Please check the console for the full form data. In a real app, you'd see detailed results here!</p>
          <button onClick={() => setShowResults(false)} className="back-button">Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Holiday;