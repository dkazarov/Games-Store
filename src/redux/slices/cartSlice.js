import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totlaPrice: 0,
    previewCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    // Toggle open/close cart popup
    activeCartPreview: (state, action) => {
      state.previewCart = action.payload;
    },
  },
});

export const { addToCart, deleteFromCart, activeCartPreview } = cartSlice.actions;

export default cartSlice.reducer;
