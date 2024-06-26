


      


import React from 'react';
import { BsSearch, BsCart, BsGeoAlt } from "react-icons/bs";
import { FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-logo border">
          <div className="logo">BlissfulBuys</div>
        </div>
        <div className="navaddress border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon"></div>
          <BsGeoAlt className="geo-icon" />
          <p className="add-sec">USA</p>
        </div>
        <div className="nav_search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input placeholder="Search BlissfulBuys" className="search-input" />
          <div className="search-icon">
            <BsSearch className="search-glass-icon" />
          </div>
        </div>
        <div className="nav_signin border">
          <p><span>Hello, Sign in</span></p>
          <p className="nav-sec">Account & Lists</p>
        </div>
        <div className="nav_return border">
          <a href="../Webpage-down/loader.html"><span>Returns</span></a>
          <p className="nav-sec">& Orders</p>
        </div>
        <div className="nav-cart border">
          <BsCart className="cart-icon" />
          <span>Cart</span>
        </div>
        <div className="nav-blissfulbuys border">
          <FaShoppingBag className="blissfulbuys-icon" />
          <span>BlissfulBuys</span>
        </div>
      </div>
      <div className="panel">
        <div className="panel-all">
          <BsSearch className="panel-icon" />
          <span>All</span>
        </div>
        <div className="panel-options">
         
          <p></p>
          <p>Sell</p>
        </div>
        <div className="panel-deals">
          Shop deals in Electronics
        </div>
      </div>
    </header>
  );
}

export default Navbar;
