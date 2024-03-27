// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import HeroSection from './components/HeroSection/HeroSection';
import Products from './components/Pages/Products';
import SalesReview from './components/Pages/SalesReview/SalesReview';
import EmployeeManagement from './components/Pages/EmployeeManagement';
import EmployeeForm from './components/Pages/EmployeeForm';
import SalesTaskTodo from './components/Pages/SalesTaskTodo';
import BusinessNews from './components/Pages/BusinessNews';
import Navigation from './components/Pages/Header/Navigation';
import Footer from './components/Pages/Footer/Footer';
import NotFoundPage from './components/PageNotFound/NotFoundPage'; 
import './App.css'; // Import custom CSS file

const App = () => {
  const addEmployee = () => {
    // Function to add an employee
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation addEmployee={addEmployee} />
        <div className="content">
        <div className="top-heading">
          <h1>Top Headlines</h1>
          <h2>Real-Time News Coverage: Latest Updates</h2>
        </div>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/Home" element={<HeroSection />} />
            <Route path="/ProductsShowcase" element={<Products />} />
            <Route path="/SalesInsights" element={<SalesReview />} />
            <Route path="/DigitalHRInsights" element={<EmployeeManagement />} />
            <Route path="/EmployeesDashboard" element={<EmployeeForm addEmployee={addEmployee} />} />
            <Route path="/TaskManager" element={<SalesTaskTodo />} />
            <Route path="/Trends" element={<BusinessNews />} />
            {/* If none of the above routes match, fallback to Home */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
