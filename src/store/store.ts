import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "../reducers/reducer";
const middleware = [thunk];

const store = createStore(productReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
