import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalPrice: 0,
    previewCart: false,
    totalCount: 0,
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
      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
    },
    deleteFromCart: (state, action) => {
      const findProduct = state.cart.find((obj) => obj.id === action.payload);

      if (findProduct.count > 1) {
        findProduct.count--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);

        // Close previewCart window when cart is empty
        if (!state.cart.length) {
          state.previewCart = false;
        }
      }
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    // Toggle open/close cart popup
    activeCartPreview: (state, action) => {
      state.previewCart = action.payload;
    },
    // Cart Selectorder
  },
});

export const cartSelector = (state) => state.cart;

export const { addToCart, deleteFromCart, activeCartPreview, clearCart } = cartSlice.actions;

export default cartSlice.reducer;