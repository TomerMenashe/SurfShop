import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { auth } from '../../firebase'; // Ensure Firebase auth is imported
import { useAuth } from '../../context/authController'; // Assuming you have a custom hook to get the auth context
import '../../styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth(); // Access the current user and the logout function from the context
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSignOut = async () => {
    try {
      await logout(); // Call the logout function from the context or directly from Firebase
      navigate('/'); // Redirect to the home page or login page after logging out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      {/* Left Side with Home Logo */}
      <div className="nav-left">
        <Link to="/" className="home-icon">
          <img src={require('../../assets/images/home.png')} alt="Home" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/surfboards" className="nav-link">SURFBOARDS</Link>
        <Link to="/fins" className="nav-link">FINS</Link>
        <Link to="/accessories" className="nav-link">ACCESSORIES</Link>
        <Link to="/apparel" className="nav-link">APPAREL</Link>
        <Link to="/technology" className="nav-link">TECHNOLOGY</Link>
        <Link to="/explore" className="nav-link">EXPLORE</Link>
      </div>

      {/* Right Side with Search, Cart, and Auth Links */}
      <div className="nav-actions">
        {/* Cart Button */}
        <button className="cart-btn">Cart</button>

        {/* Authentication Links */}
        <div className="auth-links">
          {user ? ( 
            <>
              <button className="cart-btn" onClick={handleSignOut}>Sign Out</button>
              <span className="welcome-text">
                Welcome, {user.username || "User"} {/* Display the username */}
              </span>
            </>
          ) : (
            <>
              <button className="cart-btn">
                <Link to="/login" className="login-btn-link">Login</Link>
              </button>
            </>
          )}
        </div>

        {/* Search Icon */}
        <div className="search-icon" onClick={toggleSearch}>
          <img src={require('../../assets/images/search.png')} alt="Search" />
        </div>
      </div>

      {/* Dropdown Search Bar */}
      {searchOpen && (
        <div className="search-dropdown">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products..."
          />
          {/* Close Button */}
          <button className="search-close" onClick={toggleSearch}>✕</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
