import React from 'react';
import '../../styles/Footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Support Section */}
        <div className="footer-section">
          <h4 className="footer-title">SUPPORT</h4>
          <ul className="footer-links">
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="footer-title">COMPANY</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/store-locator">Store</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
          </ul>
        </div>

        {/* Other Section */}
        <div className="footer-section">
          <h4 className="footer-title">OTHER</h4>
          <ul className="footer-links">
            <li><a href="/firewire-fleets">Final project</a></li>
            <li><a href="/demo-days">Hope you enjoyed</a></li>
            <li><a href="/volume-calculator">Thank you for watching</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/facebook.png')} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/instagram.png')} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/youtube.png')} alt="YouTube" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/tiktok.png')} alt="TikTok" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 - My Surf Shop - Israel</p>
        <ul className="footer-bottom-links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/returns">Returns & Exchanges</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
