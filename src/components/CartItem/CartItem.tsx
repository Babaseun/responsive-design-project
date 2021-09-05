import React from "react";
import { ProductAttributes } from "../../types/types";
import { removeFromCart } from "../../actions/actions";
import { useDispatch } from "react-redux";
import "./CartItem.scss";
interface Props extends ProductAttributes {}
const CartItem: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-item-image-wrapper">
        <img className="cart-item-image" src={props.itemLink} alt="item1" />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-details-content">
          <p className="item-name">{props.itemName}</p>
          <p className="item-brand">{props.vendorProductName}</p>
          <p className="item-price">{`${props.tradeCurrency} ${props.MSRP}`}</p>
        </div>
        <div>
          <button
            className="cart-item-delete-button"
            onClick={() => dispatch(removeFromCart(props._id))}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
