import { Action, ProductAttributes, State } from "../types/types";

const initialState: State = {
  isLoading: true,
  cart: [],
  products: [],
};

export const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, isLoading: false };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_PRODUCT_FROM_CART":
      return { ...state, cart: state.cart.filter((item: ProductAttributes) => item._id !== action.payload), };
    default:
      return state;
  }
};
