import React, { useState } from 'react';
import './Hotel.css';

const Hotels = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1
  });

  const [showResults, setShowResults] = useState(false);

  const hotelList = [
    { id: 1, name: "Hotel Taj", city: "mumbai", price: 12000, image: "https://source.unsplash.com/400x300/?hotel,taj" },
    { id: 2, name: "Oberoi Palace", city: "delhi", price: 8500, image: "https://source.unsplash.com/400x300/?luxury,hotel" },
    { id: 3, name: "Leela Ambience", city: "bangalore", price: 9500, image: "https://source.unsplash.com/400x300/?resort" },
    { id: 4, name: "Radisson Blu", city: "mumbai", price: 7800, image: "https://source.unsplash.com/400x300/?hotel,room" },
    { id: 5, name: "ITC Grand", city: "delhi", price: 11000, image: "https://source.unsplash.com/400x300/?hotel,lobby" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const matchedHotels = hotelList.filter(hotel =>
    hotel.city.toLowerCase().includes(formData.location.toLowerCase())
  );

  return (
    <div className="hotel-booking-container">
      {/* <h2>Book your  hotel</h2> */}
      <form className="hotel-form" onSubmit={handleSubmit}>
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter City or Hotel Name"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="">hotels</label>
        <select name="" id="" >
          <option value="Hotel Taj">Hotel Taj</option>
          <option value="Oberoi Palace">Oberoi Palace</option>
          <option value="Leela Ambience">Leela Ambience</option>
          <option value="ITC Grand">ITC Grand</option>
        </select>
        <label >Check In</label>
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
           
        />
        <label>Check Out</label>
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required

        />
       
        <label>Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          onChange={handleChange}
          required
          
        />
        
        <label>No of Rooms</label>
        <input
          type="number"
          name="rooms"
          value={formData.rooms}
          min="1"
          onChange={handleChange}
          required
          
        />
        <button type="submit" >Search</button>
      </form>

      {showResults && (
        <div className="results-box">
          <h3>Booking Details</h3>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Check-in:</strong> {formData.checkIn}</p>
          <p><strong>Check-out:</strong> {formData.checkOut}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Rooms:</strong> {formData.rooms}</p>

          <div className="hotel-list">
            {matchedHotels.length ? (
              matchedHotels.map(hotel => (
                <div key={hotel.id} className="hotel-card">
                  <img src={hotel.image} alt={hotel.name} />
                  <h4>{hotel.name}</h4>
                  <p>Price per night: ₹{hotel.price}</p>
                </div>
              ))
            ) : (
              <p>No hotels found in this location.</p>
            )}
          </div>

          <button className="pay-button">Proceed to Payment</button>
          <button className="cancel-button" onClick={() => setShowResults(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Hotels;
