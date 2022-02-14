import { createSlice } from '@reduxjs/toolkit';

const initialCountState = {
  items: 0,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialCountState,
  reducers: {
    increment(state) {
      state.items++;
    },
    decrement(state) {
      state.items--;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
