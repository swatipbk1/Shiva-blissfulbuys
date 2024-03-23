import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Products.css'; // Import CSS file for styling

const Products = ({ products, onDelete, onUpdate }) => {
  return (
    <div className="products-wrapper">
      
