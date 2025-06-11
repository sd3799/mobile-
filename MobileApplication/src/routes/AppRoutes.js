import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Products from '../pages/Products';
import Career from '../pages/Career';
import Contact from '../pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
    <Route path="/career" element={<Career />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
