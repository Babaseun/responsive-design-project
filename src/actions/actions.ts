import {
  ADD_PRODUCT_TO_CART,
  FETCH_SUCCESS,
  ProductAttributes,
  REMOVE_PRODUCT_FROM_CART,
} from "../types/types";

export const processProducts = (data: any) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const addToCart = (product: ProductAttributes) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (id: string) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id,
  };
};
