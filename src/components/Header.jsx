import React from 'react';
import '../Header.css'; // Import your CSS file here
import { logo } from '../Utils/Constants';


const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo}/>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="nav-item">Home</a>
          <a href="/about" className="nav-item">About</a>
          <a href="/watchlists" className="nav-item">WatchLists</a>
          <a href="/alerts" className="nav-item">Alerts</a>
          <a href="/corporate-events" className="nav-item">Corporate Events</a>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <button className="support-btn">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="17" fill="white"/>
<path d="M17 9.8C13.0235 9.8 9.8 13.0235 9.8 17H12.5C13.4941 17 14.3 17.8059 14.3 18.8V23.3C14.3 24.2941 13.4941 25.1 12.5 25.1H9.8C8.80589 25.1 8 24.2941 8 23.3V17C8 12.0294 12.0294 8 17 8C21.9705 8 26 12.0294 26 17V23.3C26 24.2941 25.1941 25.1 24.2 25.1H21.5C20.5059 25.1 19.7 24.2941 19.7 23.3V18.8C19.7 17.8059 20.5059 17 21.5 17H24.2C24.2 13.0235 20.9765 9.8 17 9.8ZM9.8 18.8V23.3H12.5V18.8H9.8ZM21.5 18.8V23.3H24.2V18.8H21.5Z" fill="black"/>
</svg>

          </button>
          <a href="/login" className="login-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
            </svg>
            Login/Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;