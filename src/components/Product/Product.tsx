import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/actions";
import { ProductAttributes } from "../../types/types";
import "./Product.scss";

interface Props extends ProductAttributes {}

const Product: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-img-wrapper">
          <img
            className="product-img"
            src={props.itemLink}
            alt={props.vendorProductName}
          />
        </div>
        <div className="product-item-wrapper">
          <div className="product-item-up">
            <h1 className="product-name">{props.vendorProductName}</h1>
            <p className="product-brand">{props.itemName}</p>
          </div>
          <div className="product-item-down">
            <button
              className="add-to-cart-button"
              onClick={() => dispatch(addToCart({ ...props }))}
            >
              + Add to cart
            </button>
            <p className="add-to-cart-price">{`${props.tradeCurrency} ${props.MSRP}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
