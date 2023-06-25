import React from 'react';
import './Card.css';
import logo2 from './assets/logo2.png';

const cardsData = [
  { logo: logo2, text: 'Name.com Inc', amount: '-$9.89', date: 'Jun 22' },
  { logo: logo2, text: 'Name.com Inc', amount: '-$8.99', date: 'Jun 21' },
  { logo: logo2, text: 'Name.com Inc', amount: '-$9.99', date: 'Jun 20' },
  { logo: logo2, text: 'Name.com Inc', amount: '-$9.99', date: 'Jun 19' } // Add this additional card
];

const Card = () => {
  return (
    <div className="card-container">
      <h4>Completed <br/><br/>This week</h4>
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="logo-text-container">
              <img src={card.logo} alt={`Logo ${index}`} className="card-logo" />
              <p className="card-text">{card.text}</p>
            </div>
            <p className="additional-text">{card.date} . Automatic Payment</p>
          </div>
          <div className="rs-amount">{card.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
