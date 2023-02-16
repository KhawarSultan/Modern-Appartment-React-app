import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import House from "./pages/house";
import Price from "./pages/price";
import Contact from "./pages/contact";
import Navbar from './components/navbar';
function App() {
  return (
    <>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="house" element={<House />} />
          <Route path="price" element={<Price />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
