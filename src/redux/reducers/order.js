import { createSlice } from "@reduxjs/toolkit";
export const orderSlider = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addOrder: (state, action) => {
      // console.log(action.payload)
      state.order.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlider.actions;
export default orderSlider.reducer;
