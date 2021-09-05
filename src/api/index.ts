import { processProducts } from "../actions/actions";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const API = `${process.env.REACT_APP_PRODUCT_URL}`;

    const response = await axios.get(API);

    dispatch(processProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
