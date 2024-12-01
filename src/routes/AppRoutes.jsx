import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ProductMain from '../pages/ProductMain';
import ScrollToTop from '../components/ScrollToTop';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';  
import SignUp from '../pages/SignUp';  

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </>
  );
};

export default AppRoutes;
