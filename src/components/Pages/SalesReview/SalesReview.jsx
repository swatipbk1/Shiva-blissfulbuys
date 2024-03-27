// SalesReview.js

import  { useState, useEffect } from 'react';
import './SalesReview.css'; // Importing CSS for styling
import Navigation from "../Header/Navigation"; // Import Navigation component
import Footer from "../Footer/Footer"; // Import Footer component

const SalesReview = () => {
  const [salesData, setSalesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [sortByMaxSales, setSortByMaxSales] = useState(false);
  const [sortOrder, setSortOrder] = useState('desc'); // Initial sorting order is descending

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch('http://localhost:4000/api/agg_sales', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSalesData(data);
        setFilteredData(data); // Initially set filtered data to all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = salesData;

    // Apply time filter
    if (timeFilter === 'monthly') {
      // Example: Filter data for the current month
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // January is 0
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() + 1 === currentMonth;
      });
    } else if (timeFilter === 'quarterly') {
      // Example: Filter data for the current quarter
      const currentDate = new Date();
      const currentQuarter = Math.floor((currentDate.getMonth() + 3) / 3); // Calculate current quarter
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        const itemQuarter = Math.floor((itemDate.getMonth() + 3) / 3); // Calculate item's quarter
        return itemQuarter === currentQuarter;
      });
    } else if (timeFilter === 'yearly') {
      // Example: Filter data for the current year
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === currentYear;
      });
    }

    // Apply product filter
    if (productFilter !== '') {
      filtered = filtered.filter(item => item.productId === productFilter);
    }

    // Sort data by total price (max sales) if required
    if (sortByMaxSales) {
      const sortedPrices = filtered.map(item => item.totalPrice);
      sortedPrices.sort((a, b) => sortOrder === 'asc' ? a - b : b - a);
      filtered = sortedPrices.map(price => filtered.find(item => item.totalPrice === price));
    }

    setFilteredData(filtered);
  }, [salesData, timeFilter, productFilter, sortByMaxSales, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to format number with commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
    {/* <Navigation /> */}
    <div className="sales-review-container">
      <h1 className="page-title">Sales Report</h1>
      {/* Filter UI */}
      <div className="filters">
        <label>
          Time Filter:
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option value="">All Time</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </label>
        <label>
          Product Filter:
          <select value={productFilter} onChange={(e) => setProductFilter(e.target.value)}>
            <option value="">All Products</option>
            {[...Array(15)].map((_, index) => (
              <option key={index} value={`product${index + 1}`}>{`Product ${index + 1}`}</option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortByMaxSales}
            onChange={() => setSortByMaxSales(!sortByMaxSales)}
          />
          Show Max Sales
        </label>
      </div>
      {/* Report Table */}
      <div className="table-container">
        <table className="sales-table">
          <thead>
            <tr>
              <th>Sales ID</th>
              <th>Product ID</th>
              <th>Product Description</th>
              <th>Quantity Sold</th>
              <th>Unit Price</th>
              <th>Date</th>
              <th>
                Net Sale
                {sortByMaxSales && (
                  <button className="sort-btn" onClick={toggleSortOrder}>
                    {sortOrder === 'asc' ? '▲' : '▼'}
                  </button>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.sales_id}</td>
                <td>{item.productId}</td>
                <td>{item.productDescription}</td>
                <td>{item.quantitySold}</td>
                <td>{item.unitPrice}</td>
                <td>{item.date}</td>
                <td>{numberWithCommas(item.totalPrice)}</td> {/* Apply comma formatting */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     {/* <Footer /> */}
     </div>
  );
};

export default SalesReview;
