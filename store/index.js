import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./load";
import itemsReducer from "./items";

const store = configureStore({
  reducer: { load: isLoadingReducer, items: itemsReducer },
});

export default store;
