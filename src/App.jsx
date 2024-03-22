// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import HeroSection from './Components/Herosection/HeroSection';
import ShopSection from './Components/ShopSection';
import Panel from './Components/Panel/Panel';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import NotFoundPage from './Components/PageNotFound/NotFoundPage'; // Import NotFoundPage component
import { products } from './Components/Products/productdata'; // Import product data

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Panel products={products} />
        <HeroSection />
        <ShopSection />
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={<Products products={products} />} />

          {/* Manually define routes for each category */}
          <Route path="/category/Appliances" element={<CategoryProducts category="Appliances" />} />
          <Route path="/category/Fitness%20Equipment" element={<CategoryProducts category="Fitness Equipment" />} />
          <Route path="/category/Electronics%20and%20Gadgets" element={<CategoryProducts category="Electronics and Gadgets" />} />
          <Route path="/category/Food%20%26%20Groceries" element={<CategoryProducts category="Food & Groceries" />} />
          <Route path="/category/Furniture%20and%20Decor" element={<CategoryProducts category="Furniture and Decor" />} />
          <Route path="/category/Apparels" element={<CategoryProducts category="Apparels" />} />

          {/* Route for Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const CategoryProducts = ({ category }) => {
  // Filter products based on category
  const filteredProducts = products.filter(product => product.category === category);

  return <Products products={filteredProducts} />;
}

export default App;
