import {
  Action,
  ADD_PRODUCT_TO_CART,
  FETCH_SUCCESS,
  ProductAttributes,
  REMOVE_PRODUCT_FROM_CART,
} from "../types/types";

export const processProducts = (data: ProductAttributes[]): Action => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const addToCart = (product: ProductAttributes): Action => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (id: string): Action => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id,
  };
};
