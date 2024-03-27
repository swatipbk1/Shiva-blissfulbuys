import React from 'react';
import './footer.css'; // Import CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="search-form">
              <input type="text" placeholder="Search on SHIVA" className="search-input" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Crafting innovation into every detail, we redefine excellence in product design. Our solutions seamlessly blend functionality, style, and durability, setting new standards in the industry. Elevate your experience with our meticulously crafted products.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products Showcase</a></li>
              <li><a href="/sales">Sales Insights</a></li>
              <li><a href="/digital-hr">Digital HR Insights</a></li>
              <li><a href="/employees">Employees Dashboard</a></li>
              <li><a href="/tasks">Task Manager</a></li>
              <li><a href="/trends">Trends</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@shiva.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                <a href="#">Watch</a> | 
                <a href="#">Listen</a> | 
                <a href="#">Live TV</a> | 
                <a href="#">FOLLOW SHIVA</a> | 
                <a href="#">Sign in</a> | 
                <a href="#">Terms of Use</a> | 
                <a href="#">Privacy Policy</a> | 
                <a href="#">Do Not Sell Or Share My Personal Information</a> | 
                <a href="#">Ad Choices</a> | 
                <a href="#">Accessibility & CC</a> | 
                <a href="#">About</a> | 
                <a href="#">Newsletters</a> | 
                <a href="#">Transcripts</a> | 
                <br />
                &copy; 2024 SHIVA. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
