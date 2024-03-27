import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navigation.css'; // Import CSS file

const Navigation = () => {
  const isExcluded = (color) => {
    return color === 'rgb(4, 8, 84)' || color === 'white';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SHIVA</Link>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/ProductsShowcase" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Products Showcase Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/SalesInsights" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Sales Insights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/DigitalHRInsights" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Digital HR Insights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/EmployeesDashboard" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Employees Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/TaskManager" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Task Manager</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Trends" style={{ color: isExcluded('rgb(4, 8, 84)') ? 'rgb(4, 8, 84)' : 'inherit' }}>Trends</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
