import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Serach";
import Slider from "./components/Slider"
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Slider/>
      <HeroSection/>
    </>
  );
}

export default App;
