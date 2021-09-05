export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export type Action = {
  type: string;
  payload: ProductAttributes[] | string | ProductAttributes | any;
};

export type State = {
  isLoading: boolean;
  cart: ProductAttributes[];
  products: ProductAttributes[];
};
export interface ProductAttributes {
  _id: string;
  vendorProductName: string;
  itemName: string;
  MSRP: number;
  itemLink: string;
  tradeCurrency: string;
}
