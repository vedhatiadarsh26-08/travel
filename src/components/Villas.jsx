import React, { useState } from 'react';
import './Villa.css'; // Optional CSS import

const VillaBooking = () => {
  const [formData, setFormData] = useState({
    villa: '',
    checkin: '',
    checkout: '',
    guests: 1,
    name: '',
    email: ''
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.villa &&
      formData.checkin &&
      formData.checkout &&
      formData.guests &&
      formData.name &&
      formData.email
    ) {
      setShowDetails(true);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <section className="villa-booking-section">
      {/* <h2>Book Your Dream Villa</h2> */}
      <form className="villa-booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="villa">Select Villa</label>
          <select id="villa" value={formData.villa} onChange={handleChange} required>
            <option value="">-- Choose a Villa --</option>
            <option>Ocean View Retreat</option>
            <option>Mountain Hideaway</option>
            <option>Desert Escape</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkin">Check-in</label>
          <input type="date" id="checkin" value={formData.checkin} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="checkout">Check-out</label>
          <input type="date" id="checkout" value={formData.checkout} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            placeholder="Number of guests"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            required
          />
        </div>

        <button type="submit">SEARCH</button>
      </form>

      {/* Result box shown after form submission */}
      {showDetails && (
        <div className="villa-details-box">
          <h3>Booking Details</h3>
          <p><strong>Villa:</strong> {formData.villa}</p>
          <p><strong>Check-in:</strong> {formData.checkin}</p>
          <p><strong>Check-out:</strong> {formData.checkout}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <button onClick={() => setShowDetails(false)}>Cancel</button>
          <button>Proceed to Payment</button>
        </div>
      )}
    </section>
  );
};

export default VillaBooking;
