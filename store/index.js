import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './loadSlide'

const store = configureStore({
  reducer: { load: isLoadingReducer },
});

export default store;