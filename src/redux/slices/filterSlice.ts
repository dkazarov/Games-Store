import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSearchSliceState = {
  searchValue: string;
};

const initialState: TSearchSliceState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const searchSelector = (state: RootState) => state.search;

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
