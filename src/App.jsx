import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import HeroSection from './Components/Herosection/HeroSection';
import ShopSection from './Components/ShopSection';
import Panel from './Components/Panel/Panel';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import NotFoundPage from './Components/PageNotFound/NotFoundPage'; // Import NotFoundPage component
import ReviewOrderPage from './Components/ReviewOrderPage/ReviewOrderPage'; // Import ReviewOrderPage component
import { products as initialProducts } from './Components/Products/productdata'; // Import initial product data

const App = () => {
  // State to hold the products data
  const [products, setProducts] = useState(initialProducts);

  // Function to delete a product
  const deleteProduct = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  // Function to update a product
  const updateProduct = (productId, updatedProductData) => {
    setProducts(prevProducts => prevProducts.map(product => {
      if (product.id === productId) {
        return { ...product, ...updatedProductData };
      }
      return product;
    }));
  };

  useEffect(() => {
    // Here you can perform any side effects related to products,
    // such as fetching data from an API, updating the database, etc.
    // This effect will run when the component mounts and whenever the products state changes.
  }, [products]); // Dependency array ensures that the effect runs only when products state changes

  return (
    <Router>
      <div>
        <Navbar />
        <Panel products={products} />
        <HeroSection />
        <ShopSection />
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={<Products products={products} onDelete={deleteProduct} onUpdate={updateProduct} />} />

          {/* Manually define routes for each category */}
          <Route path="/category/Appliances" element={<CategoryProducts category="Appliances" />} />
        
}

const CategoryProducts = ({ category }) => {
  // Filter products based on category
  const filteredProducts = initialProducts.filter(product => product.category === category);

  return <Products products={filteredProducts} onDelete={null} onUpdate={null} />;
}

export default App;
