import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    previewCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    activeCartPreview: (state, action) => {
      state.previewCart = action.payload;
    },
  },
});

export const { addToCart, deleteFromCart, activeCartPreview } = cartSlice.actions;

export default cartSlice.reducer;
