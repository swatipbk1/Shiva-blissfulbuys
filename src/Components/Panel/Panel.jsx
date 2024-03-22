import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Panel.css'; // Import your CSS file for styling

function Panel() {
  return (
    <nav className="panel" style={{ backgroundColor: '#4C5270', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <ul className="panel-nav">
        <li className="panel-item">
          <Link to="/" className="panel-link">Home</Link> {/* Use Link instead of anchor tag */}
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
        {/* Other navigation items */}
        <li className="panel-item">
          <Link to="/category/Food%20&%20Groceries" className="panel-link">Customer Reviews</Link> {/* Link to the customer reviews page */}
        </li>
      </ul>
    </nav>
  );
}

export default Panel;
