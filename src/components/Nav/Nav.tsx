import React, { useState } from "react";
import CartDetails from "../CartDetails/CartDetails";

import "./Nav.scss";

const Nav = () => {
  const [checkOut, setCheckOut] = useState("display-checkout-section");
  const closeCheckoutBox = () => {
    if (checkOut === "display-checkout-section") setCheckOut("");
    else setCheckOut("display-checkout-section");
  };
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="nav-item-left">
          <div className="brand">Fülhaus Shop</div>
        </div>
        <div className="nav-item-right">
          <button
            className="nav-cart-button"
            type="button"
            onClick={closeCheckoutBox}
          >
            CART
          </button>
        </div>
      </div>
      <CartDetails displayCheckoutBox={checkOut} />
    </div>
  );
};

export default Nav;
