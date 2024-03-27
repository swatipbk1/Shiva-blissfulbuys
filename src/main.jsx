import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root container
const rootContainer = document.getElementById('root');

// Check if a root has already been created for the container
const existingRoot = rootContainer._reactRootContainer;

// If a root already exists, render your components on the existing root
if (existingRoot) {
  existingRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Otherwise, create a new root and render your components
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
