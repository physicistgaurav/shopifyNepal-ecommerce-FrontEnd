import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import cartReducer from "./cart";
import orderReducer from "./order";

const reducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
});
export const store = configureStore({
  reducer,
});
