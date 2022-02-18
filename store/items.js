import { createSlice } from "@reduxjs/toolkit";

const initialCountState = {
  items: [],
  totalAmount: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState: initialCountState,
  reducers: {
    addItem(state, action) {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        state.items[existingCartItemIndex] = updatedItem;
      } else {
        state.items = state.items.concat(action.payload);
      }
    },
    remove(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingCartItemIndex];
      state.totalAmount = state.totalAmount - existingItem.price;

      if (state.items[existingCartItemIndex].amount > 1) {
        state.items[existingCartItemIndex] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
