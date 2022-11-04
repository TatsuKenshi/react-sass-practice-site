import React from "react";
import "../styles/GiftShop.scss";

const GiftShop = () => {
  return (
    <div className="shop-section">
      <div className="header">
        <h1>Gift Shop</h1>
        <p>Available in 2023</p>
      </div>
      <div className="look">
        <p>We have 50% off for all products!</p>
        <button>Take a look!</button>
      </div>
    </div>
  );
};

export default GiftShop;
