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
import Home from "./Page/Home";
import ProductPage from "./Page/ProductPage";
import CartPage from "./Page/CartPage";
import CheckoutPage from "./Page/CheckOutPage";
import Footer from "./common/Footer";
import BacktoTop from "./common/Backtotop";
import BlogSection from "./components/BlogSection";
import Testimonial from "./components/Testimonial";
import SakroobCircle from "./components/SakroobCircle";

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
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      <BlogSection />
      <Testimonial />
      <SakroobCircle />
      <Footer />
      <BacktoTop />
    </>
  );
}

export default App;
