import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api";
import { ProductAttributes, State } from "../../types/types";
import Product from "../Product/Product";
import "./ProductList.scss";

const ProductList = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="product-list">
      {state.isLoading ? (
        <h1 className="spinner">
          Loading{""} <i className="fas fa-spinner fa-spin fa-2x"></i>
        </h1>
      ) : (
        state.products.map((product: ProductAttributes) => (
          <div className="product-list-item" key={product._id}>
            <Product
              vendorProductName={product.vendorProductName}
              itemName={product.itemName}
              MSRP={product.MSRP}
              itemLink={product.itemLink}
              tradeCurrency={product.tradeCurrency}
              _id={product._id}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
