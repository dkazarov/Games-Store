import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    value: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { addToCart, deleteFromCart, increment } = cartSlice.actions;

export default cartSlice.reducer;
