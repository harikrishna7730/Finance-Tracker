import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 FinanceTrack. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-links">
            <span>Follow us:</span>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
