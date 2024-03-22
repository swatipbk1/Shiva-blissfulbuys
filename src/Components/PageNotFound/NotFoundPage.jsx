import React, { useEffect, useState } from 'react';
import pic from './pic.jpeg'; // Import the image

const styles = {
  container: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    backgroundColor: '#006400', // Dark green background color
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh', // Ensure the container takes up at least the full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#FFF', // Text color
    textAlign: 'center',
  },
  img: {
    width: '200px',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', // Image shadow
  },
  spinner: {
    display: 'inline-block',
    width: '80px',
    height: '80px',
    position: 'relative',
    animation: 'spin 1s linear infinite',
  },
  bounce1: {
    width: '20px',
    height: '20px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    animation: 'bounce 1s infinite ease-in-out',
  },
  bounce2: {
    width: '20px',
    height: '20px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    animation: 'bounce 1s infinite ease-in-out',
    animationDelay: '-0.5s',
  },
  message: {
    fontSize: '2rem',
    marginTop: '1.5rem', // Increase the space between spinner and message
    lineHeight: '1.5',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.5rem',
    color: '#000', // Black text color
    marginTop: '1.5rem',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#E1AD01', // Custom background color
    borderRadius: '20px', // Rounded border
    border: '2px solid #FFF', // White border
    fontWeight: 'bold', // Bold text
    transition: 'background-color 0.3s, color 0.3s', // Transition effect for background color and text color
  },
  linkHover: {
    backgroundColor: '#FFF', // White background color on hover
    color: '#000', // Black text color on hover
  },
  '@keyframes spin': {
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes bounce': {
    '0%, 100%': { transform: 'scale(0)' },
    '50%': { transform: 'scale(1)' },
  },
};

const NotFoundPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = pic; // Use the imported image

    // Cleanup function to remove event listener
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <div style={styles.container}>
      {imageLoaded ? (
        <>
          <img src={pic} alt="Sorry boy" style={styles.img} />
          <p style={styles.message}>
            <span style={{ fontSize: '4rem' }}>404</span> - Page Not Found
            <br />
            Oops! Looks like you're lost in the digital void.
            <br />
            The page you are looking for does not exist.
          </p>
          <a href="/" style={styles.link} onMouseEnter={(e) => e.target.style = styles.linkHover} onMouseLeave={(e) => e.target.style = styles.link}>Go back safely</a>
        </>
      ) : (
        <div style={styles.spinner}>
          <div style={styles.bounce1}></div>
          <div style={styles.bounce2}></div>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
