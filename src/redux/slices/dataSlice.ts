import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getDatabase, ref, child, get } from 'firebase/database';
import { RootState } from '../store';

interface IDataItem {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  genres: string[];
  count: number;
  video: string;
}

interface IDataSliceState {
  data: IDataItem[];
  isLoading: boolean;
  error: boolean;
}

const initialState: IDataSliceState = {
  data: [],
  isLoading: true,
  error: false,
};

export const getAllData = createAsyncThunk('data', async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `games/`));
  if (snapshot.exists()) {
    snapshot.val();
  } else {
    alert('This is an error alert — check it out!');
    console.log('This is an error alert — check it out!');
  }
  return snapshot.val() as IDataItem[];
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const dataSelector = (state: RootState) => state.data;

export default dataSlice.reducer;
