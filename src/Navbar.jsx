import React from 'react';
import './Navbar.css';
import paypalLogo from './assets/3119338.png';
import notificationLogo from './assets/p.png';
import settingsLogo from './assets/p2.png';
import searchLogo from './assets/Vector.png'


const Navbar = () => {
  return (
    <>

    <nav className="navbar">
      <div className="logo">
        <img src={paypalLogo} alt="PayPal Logo" />
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/finance">Finance</a>
        <a href="/send">Send and Request</a>
        <a href="/activity">Activity</a>
        <a href="/help">Help</a>
      </div>
      <div className="icons">
        <img src={notificationLogo} alt="Notification Icon" />
        <img src={settingsLogo} alt="Settings Icon" />
        <a href="/logout">Logout</a>
      </div>
      </nav>
      <div className="search-bar">
        <img src={searchLogo} alt="Search Icon" />
        <input type="text" placeholder="Search by name or email" />
      </div>
      <div className="filter">
      <div className="filter-heading">
        <span className="filter-text">Filter by</span>
      </div>
      <div className="filter-buttons">
        <button className="filter-button date">Date:Last 90 days</button>
        <button className="filter-button">Type</button>
        <button className="filter-button">Status</button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
