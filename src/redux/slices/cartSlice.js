import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalPrice: 0,
    previewCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cart.find((obj) => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    deleteFromCart: (state, action) => {
      const findProduct = state.cart.find((obj) => obj.id === action.payload);

      if (findProduct.count > 1) {
        findProduct.count--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
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
