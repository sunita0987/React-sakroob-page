import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Serach";
import Slider from "./components/Slider";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import PopularProduct from "./components/PopularProduct";
import ProductPage from "./Page/ProductPage";
import BestSellers from "./components/BestSellers"

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Slider />
      <HeroSection />
      <Feature />
      <PopularProduct />
     
      <Router>
        <Routes>
          <Route path="/" element={<BestSellers />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
