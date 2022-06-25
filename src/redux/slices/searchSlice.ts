import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  data: [],
  isLoading: true,
  error: false,
};

export const dataSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchValue(state, action) {},
  },
});

export const dataSelector = (state: RootState) => state.data;

export default dataSlice.reducer;
