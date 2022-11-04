import React from "react";
import "../styles/Denim.scss";

const Denim = () => {
  return (
    <div className="denim-section">
      <div className="header">
        <h1>Denim Collection</h1>
        <p>Available in 2023</p>
      </div>
      <div className="look">
        <p>We have 50% off for all products!</p>
        <button>Take a look!</button>
      </div>
    </div>
  );
};

export default Denim;
