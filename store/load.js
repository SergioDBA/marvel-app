import { createSlice } from '@reduxjs/toolkit';

const initialLoadState = { isLoading: false };

const isLoadingSlice = createSlice({
  name: 'Loading',
  initialState: initialLoadState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    notLoading(state) {
      state.isLoading = false;
    }
  },
});

export const loadActions = isLoadingSlice.actions;

export default isLoadingSlice.reducer;