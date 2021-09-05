import { processProducts } from "../actions/actions";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("https://main-api.fulhaus.com/fulhaus-tech-test/get-products");

    dispatch(processProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
