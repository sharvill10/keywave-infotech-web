    // routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ProductMain from '../pages/ProductMain';
import ScrollToTop from '../components/ScrollToTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

    
