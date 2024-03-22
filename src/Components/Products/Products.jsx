import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Products.css'; // Import CSS file for styling

const Products = ({ products }) => {
  return (
    <div className="products-wrapper">
      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.url} alt={product.title.shortTitle} />
            <div className="product-details">
              <h3>{product.title.shortTitle}</h3>
              <p>{product.description}</p>
              <div className="price-details">
                <span className="mrp">MRP: ₹{product.price.mrp}</span>
                <span className="cost">Price: ₹{product.price.cost}</span>
                <span className="discount">Discount: {product.price.discount}</span>
              </div>
              <a href={product.detailUrl} target="_blank" rel="noopener noreferrer">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define prop types for Products component
Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.shape({
        shortTitle: PropTypes.string.isRequired
      }).isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.shape({
        mrp: PropTypes.number.isRequired,
        cost: PropTypes.number.isRequired,
        discount: PropTypes.string.isRequired
      }).isRequired,
      detailUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Products;
