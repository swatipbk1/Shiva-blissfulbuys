// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>BlissfulBuys Newsletter</li>
            <li>About BlissfulBuys</li>
            <li>Accessibility</li>
            <li>Sustainability</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on BlissfulBuys</li>
            <li>Sell apps on BlissfulBuys</li>
            <li>Supply to BlissfulBuys</li>
            <li>Protect & Build Your Brand</li>
            <li>Become an Affiliate</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>BlissfulBuys Payment Products</h3>
          <ul>
            <li>BlissfulBuys Visa</li>
            <li>BlissfulBuys Store Card</li>
            <li>BlissfulBuys Secured Card</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        {/* Add more footer columns as needed */}
      </div>
      <div className="copyright">
        <p>© 1996-2024, BlissfulBuys.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
