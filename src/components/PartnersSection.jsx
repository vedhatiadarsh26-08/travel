import React from 'react';
import './PartnersSection.css';
import flight from '../assets/fight.png'
import image from '../assets/img2.png'
import king from '../assets/king.png'
import cgh from'../assets/cgh.png'
const PartnersSection = () => {
  return (
    <div className="partners-wrapper">
      {/* Airline Partners */}
      <section className="section" id='air'>
        <h2>Experience Flying with our Airline Partners</h2>
        <div className="airline-cards">
          <div className="airline-card">
            <img src={flight}alt="Air Asia"/>
            <h3>Air Asia</h3>
          </div>
          <div className="airline-card">
            <img src={image}alt="Cathay Pacific"/>
            <h3>cathay pacific</h3>
          </div>
        </div>
        </section>
         <section className="section hotel-section" id='hotal'>
        <div className="hotel-text">
          <h2>Flagship Hotel Stores on MakeMyTrip</h2>
        </div>
        <div className="hotel-cards">
          <div className="hotel-card">
            <img
              src={cgh}
              alt="CGH Earth"
            />
            <div className="hotel-caption">CGH Earth Experience Hotels</div>
          </div>
          <div className="hotel-card">
            <img
              src={king}
              alt="Kingston Hotels"
            />
            <div className="hotel-caption">Kingston Hotels</div>
          </div>
        </div>
      </section>
        </div>
  );
};

export default PartnersSection;
