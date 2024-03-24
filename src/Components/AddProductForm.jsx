import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new product object
    const newProduct = {
      name,
      description,
      price: parseFloat(price), // Convert price to number
    };
    // Pass the new product to the parent component
    onAddProduct(newProduct);
    // Clear form fields after submission
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      