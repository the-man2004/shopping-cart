import React from "react";
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import Header from "./components/Header.js";
import Shop from "./components/Shop";
import "./styles/app.css";

const App = () => {

  const [items, setItems] = useState(0);

  return (
    <BrowserRouter>
      <div id="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <footer>
          <p>Copyright © 2023 <Link id="footer-link" to="">the-man2004</Link></p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
