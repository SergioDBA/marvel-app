import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './items'
import itemsCountsReducer from './items'

const store = configureStore({
  reducer: { load: isLoadingReducer, itemsCount: itemsCountsReducer },
});

export default store;