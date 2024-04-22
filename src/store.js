// store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducer/reducer';

const store = configureStore({
    reducer: expenseReducer, 
  });
  

export default store;
