import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppWeather from './components/Appweather';
import CityMapPage from './components/CityMapPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Paramètre dynamique avec :selectedCity */}
      <Route path="/weather/:selectedCity" element={<AppWeather />} />
      <Route path="/city/:cityName/:lat/:lon" element={<CityMapPage />} />
      {/* D’autres routes */}
    </Routes>
  );
};

export default AppRoutes;
