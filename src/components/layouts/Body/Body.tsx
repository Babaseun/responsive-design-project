import React from "react";
import Banner from "../../Banner/Banner";
import ProductList from "../../ProductList/ProductList";
import "./Body.scss";
const Body = () => {
  return (
    <div className="body">
      <Banner />
      <ProductList />
    </div>
  );
};

export default Body;
