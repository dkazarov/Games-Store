import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ICartItem {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  genres: string[];
  count: number;
  video: string;
}

interface ICartSliceState {
  cart: ICartItem[];
  totalPrice: number;
  previewCart: boolean;
  totalCount: number;
}

const initialState: ICartSliceState = {
  cart: [],
  totalPrice: 0,
  previewCart: false,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const findProduct = state.cart.find((obj) => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    decrementItem(state, action: PayloadAction<number>) {
      const findProduct = state.cart.find((obj) => obj.id === action.payload);

      if (!findProduct) return;

      if (findProduct.count > 1) {
        findProduct.count--;
      }

      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    decrementItemPopup(state, action: PayloadAction<number>) {
      const findProduct = state.cart.find((obj) => obj.id === action.payload);

      if (!findProduct) return;

      if (findProduct.count > 1) {
        findProduct.count--;
      } else {
        state.cart = state.cart.filter((obj) => obj.id !== action.payload);
      }

      if (state.cart.length === 0) {
        state.previewCart = false;
      }

      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload);
      state.totalCount = state.cart.reduce((acc, obj) => obj.count + acc, 0);
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    // Toggle open/close cart popup
    activeCartPreview: (state, action: PayloadAction<boolean>) => {
      state.previewCart = action.payload;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const {
  addToCart,
  activeCartPreview,
  clearCart,
  decrementItem,
  deleteProduct,
  decrementItemPopup,
} = cartSlice.actions;

export default cartSlice.reducer;
