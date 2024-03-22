import React, { useState, useEffect } from 'react';

const CustomerReviewPage = () => {
    // Define state for storing the list of reviews
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from an API or define them statically
    useEffect(() => {
        // Example: Fetch reviews from an API
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://api.example.com/reviews');
                const data = await response.json();
                setReviews(data.reviews); // Assuming the API response contains a "reviews" array
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []); // Run only once when the component mounts

    return (
        <div>
            <h1>Customer Reviews</h1>
            <div className="review-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <h3>{review.customerName}</h3>
                        <p>Rating: {review.rating}</p>
                        <p>{review.content}</p>
                        <p>Date: {review.date}</p>
                        {/* Add delete button if you want to allow deleting reviews */}
                        {/* <button onClick={() => deleteReview(review.id)}>Delete</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviewPage;
