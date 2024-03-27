import  { useState, useEffect } from 'react';

import { Card, Button, Modal, Pagination } from 'react-bootstrap';

import './Products.css';


const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Change the number of items per page as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewImage = (url) => {
    setSelectedImage(url);
    setShowImage(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* <Navigation /> */}
      <h1 className="text-center">Unveiling Tomorrow's Technology Today: Dive into Our Thrilling Products Showcase!"






</h1>
      <br></br>
      <br></br>
      <div className="row justify-content-center">
        {currentItems.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={product.url} alt={product.title.shortTitle} onError={(e) => console.error('Error loading image:', e.target.src)} />
              <Card.Body>
                <Card.Title>{product.title.shortTitle}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <span className="mrp">MRP: ${product.price.mrp}</span>
                  <span className="cost">Price: ${product.price.cost}</span>
                  <span className="discount">Discount: {product.price.discount}</span>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="primary" className="rounded-smaller" onClick={() => handleViewImage(product.url)}>View Details</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <Pagination className="justify-content-center">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Modal show={showImage} onHide={() => setShowImage(false)} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Product" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowImage(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
