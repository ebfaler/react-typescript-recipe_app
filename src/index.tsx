import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//use ! to specify that null will not be returned
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
