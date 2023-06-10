import { createSlice } from "@reduxjs/toolkit";
export const cartSlider = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push(newItem);
      }
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
