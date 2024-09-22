import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authController';
import axios from 'axios'; // Import axios to make API calls
import '../../styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  // Function to handle search input and fetch results
  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setSearchTerm(searchQuery);

    if (searchQuery.length > 2) {
      try {
        const response = await axios.get(`/api/surfboards/search?q=${searchQuery}`);
        setSearchResults(response.data); // Store results in the state
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  // Function to handle search result click and navigate properly
  const handleSearchResultClick = (surfboardSku) => {
    setSearchOpen(false); // Close the search dropdown
  
    // Use window.location.href to force navigation to the product page
    window.location.href = `/surfboards/${surfboardSku}`;
  
    // Clear search input and results after navigation
    setSearchTerm(''); // Reset the search input
    setSearchResults([]); // Clear the search results
  };
  
  

  return (
    <nav className="navbar">
      {/* Left Side with Home Logo */}
      <div className="nav-left">
        <a href="/" className="home-icon">
          <img src={require('../../assets/images/home.png')} alt="Home" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="/surfboards" className="nav-link">SURFBOARDS</a>
        <a href="/fins" className="nav-link">FINS</a>
        <a href="/accessories" className="nav-link">ACCESSORIES</a>
        <a href="/apparel" className="nav-link">APPAREL</a>
        <a href="/technology" className="nav-link">TECHNOLOGY</a>
        <a href="/explore" className="nav-link">EXPLORE</a>
      </div>

      {/* Right Side with Search, Cart, and Auth Links */}
      <div className="nav-actions">
        {/* Cart Button */}
        <button className="cart-btn" onClick={handleCartClick}>Cart</button>

        {/* Authentication Links */}
        <div className="auth-links">
          {user ? (
            <>
              <button className="cart-btn" onClick={handleSignOut}>Sign Out</button>
              <span className="welcome-text">
                Welcome, {user.username || "User"}
              </span>
            </>
          ) : (
            <>
              <button className="cart-btn">
                <a href="/login" className="login-btn-link">Login</a>
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
            value={searchTerm}
            onChange={handleSearch} // Handle search input
          />
          {/* Close Button */}
          <button className="search-close" onClick={toggleSearch}>✕</button>

          {/* Display search results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              <ul>
                {searchResults.map((surfboard) => (
                  <li key={surfboard.sku} className="search-result-item">
                    {/* Use a clickable div and call the handleSearchResultClick function */}
                    <div
                      className="search-result-link"
                      onClick={() => handleSearchResultClick(surfboard.sku)}
                    >
                      <div className="search-result-image">
                        <img src={surfboard.image} alt={surfboard.model} />
                      </div>
                      <div className="search-result-details">
                        <span className="search-result-name">{surfboard.model}</span>
                        <span className="search-result-sku">SKU: {surfboard.sku}</span>
                        <span className="search-result-description">{surfboard.description}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
