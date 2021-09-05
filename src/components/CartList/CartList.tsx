import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductAttributes, State } from "../../types/types";
import CartItem from "../CartItem/CartItem";
import "./CartList.scss";
interface Props {
  displayCheckoutBox: string;
}
const CartList: React.FC<Props> = (props: Props) => {
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
  return (
    <div className="cart-container">
      <div className={`cart-control ${props.displayCheckoutBox}`}>
        <div className="cart-items">
          <div className="cart-list-items">
            {cartItems.length ? (
              cartItems.map((item: ProductAttributes, number: number) => (
                <div key={item._id + number} className="cart-item">
                  <CartItem
                    itemName={item.itemName}
                    vendorProductName={item.vendorProductName}
                    MSRP={item.MSRP}
                    tradeCurrency={item.tradeCurrency}
                    _id={item._id}
                    itemLink={item.itemLink}
                  />
                </div>
              ))
            ) : (
              <div className="cart-item-details-empty">
                <p className="cart-empty-text"> Cart is Empty</p>
              </div>
            )}
          </div>
          <div className="cart-list-items">
            <div className="total-items">
              <div>Total:</div>
              <div>{`${currency} ${total}`}</div>
            </div>
          </div>
          <div className="cart-list-items">
            <button disabled={cartItems.length === 0} className="button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
