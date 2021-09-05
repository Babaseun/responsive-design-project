import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../actions/actions";
import { ProductAttributes, State } from "../../types/types";
import "./CartDetails.scss";

const CartDetails = ({ displayCheckoutBox, }: { displayCheckoutBox: string; }) => {
  const [total, setTotal] = useState(0);
  const [currency, setCurrency] = useState("$");
  const cartItems = useSelector((state: State) => state.cart);

  useEffect(() => {
    let price = 0;

    cartItems.forEach((item: ProductAttributes) => {
      price += item.MSRP;
    });
    setTotal(price);
    if (cartItems.length) {
      setCurrency(cartItems[0].tradeCurrency);
    }
  }, [cartItems]);
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      <div className={`cart-control ${displayCheckoutBox}`}>
        <div className="cart">
          <ul className="cart-items">
            <li className="cart-list-items">
              {cartItems.length ? (
                cartItems.map((item: ProductAttributes, i: number) => (
                  <>
                    <div key={item._id + i} className="cart-item">
                      <div className="cart-item-image-wrapper">
                        <img
                          className="cart-item-image"
                          src={item.itemLink}
                          alt="item1"
                        />
                      </div>
                      <div className="cart-item-details">
                        <div className="cart-item-details-content">
                          <p className="item-name">{item.itemName}</p>
                          <p className="item-brand">{item.vendorProductName}</p>
                          <p className="item-price">{`${currency} ${item.MSRP}`}</p>
                        </div>
                        <div>
                          <button
                            className="cart-item-delete-button"
                            onClick={() => dispatch(removeFromCart(item._id))}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                ))
              ) : (
                <div className="cart-item-details-empty">
                  <p> Cart is Empty</p>
                </div>
              )}
            </li>
            <li className="cart-list-items">
              <div className="total-items">
                <div>Total:</div>
                <div>{`${currency} ${total}`}</div>
              </div>
            </li>
            <li className="cart-list-items">
              <button disabled={cartItems.length === 0} className="button">
                Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
