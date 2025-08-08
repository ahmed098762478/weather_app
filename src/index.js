import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CityMapPage from './components/CityMapPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/city/:cityName/:lat/:lon" element={<CityMapPage />} />
    </Routes>
  </Router>
);
