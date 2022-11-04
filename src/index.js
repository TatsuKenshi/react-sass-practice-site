import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Denim from "./pages/Denim";
import GiftShop from "./pages/GiftShop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/about" element={<About />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/shop" element={<GiftShop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
