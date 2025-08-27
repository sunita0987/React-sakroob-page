import { useState } from "react";
import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <>
              <Navbar />
              <Search />
              <Slider />
              <HeroSection />
              <Feature />
              <PopularProduct />
              <Home setIsAuthenticated={setIsAuthenticated} />
              <BlogSection />
              <Testimonial />
              <SakroobCircle />
              <Footer />
              <BacktoTop />
            </>
          ) : (
            <Navigate to="/loginPage" />
          )
        }
      />
      <Route
        path="/product/:id"
        element={
          isAuthenticated ? (
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          ) : (
            <Navigate to="/loginPage" />
          )
        }
      />
      <Route
        path="/cart"
        element={
          isAuthenticated ? (
            <>
              <Navbar />
              <CartPage />
              <Footer />
            </>
          ) : (
            <Navigate to="/loginPage" />
          )
        }
      />
      <Route
        path="/checkout"
        element={
          isAuthenticated ? (
            <>
              <Navbar />
              <CheckoutPage />
              <Footer />
            </>
          ) : (
            <Navigate to="/loginPage" />
          )
        }
      />
      <Route
        path="/loginPage"
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
