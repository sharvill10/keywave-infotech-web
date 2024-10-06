import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ProductMain from '../pages/ProductMain';
import ScrollToTop from '../components/ScrollToTop';
import ProductDetails from '../pages/ProductDetails';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/products/:id" element={<ProductDetails />} /> 
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
