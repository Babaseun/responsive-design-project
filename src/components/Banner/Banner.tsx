import React from "react";

import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner-image"
        src="./assets/kam-idris-_HqHX3LBN18-unsplash 1@2x.png"
        alt="banner.jpg"
      />
      <div className="banner-footer">
        <p className="banner-footer-text">Patio Furniture</p>
        <button className="banner-footer-button">SHOP</button>
      </div>
    </div>
  );
};

export default Banner;
