import React from 'react';
import './Card.css';
import logo2 from './assets/logo2.png';

const cardsData = [
  { logo: logo2, text: 'Name.com Inc' },
  { logo: logo2, text: 'Name.com Inc' },
  { logo: logo2, text: 'Name.com Inc' }
];

const Card = () => {
  return (
    <div className="card-container">
      <h4>Completed</h4>
      <h5>This Week</h5>
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="logo-text-container">
              <img src={card.logo} alt={`Logo ${index}`} className="card-logo" />
              <p className="card-text">{card.text}</p>
            </div>
            <p className="additional-text">Additional Text</p>
          </div>
          <div className="rs-amount">Rs200</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
