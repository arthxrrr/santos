// src/main.js ou src/index.js (depende do seu starter)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import corrigido
import './index.css'; // Se existir

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);