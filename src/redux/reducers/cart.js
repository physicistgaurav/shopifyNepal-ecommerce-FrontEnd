import { createSlice } from "@reduxjs/toolkit";
export const cartSlider = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      if (action.payload === "removeall") {
        state.cart = [];
      } else {
        let { cart } = state;
        state.cart = cart.filter((item) => item.id !== action.payload.id);
      }
    },
    editCart: (state, action) => {
      let { cart } = state;
      state.cart = cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addCart, removeCart, editCart } = cartSlider.actions;
export default cartSlider.reducer;
