import { processProducts } from "../actions/actions";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_PRODUCT_URL}`);

    dispatch(processProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
