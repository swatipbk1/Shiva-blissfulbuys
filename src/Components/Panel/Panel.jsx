import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Panel.css'; // Import your CSS file for styling
function Panel() {
  return (
    <nav className="panel" style={{ backgroundColor: '#4C5270', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <ul className="panel-nav">
        <li className="panel-item">
          <Link to="/" className="panel-link">Home</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Appliances" className="panel-link">Appliances</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Fitness%20Equipment" className="panel-link">Fitness Equipment</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Electronics%20and%20Gadgets" className="panel-link">Electronics and Gadgets</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Food%20%26%20Groceries" className="panel-link">Food & Groceries</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Furniture%20and%20Decor" className="panel-link">Furniture and Decor</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/category/Apparels" className="panel-link">Apparels</Link>
        </li>
        <li className="panel-item">
          <span className="panel-pipe">|</span>
        </li>
        <li className="panel-item">
          <Link to="/review-order" className="panel-link">Review Order</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Panel;
