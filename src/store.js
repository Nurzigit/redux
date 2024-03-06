// store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducer/reducer';

const store = configureStore({
    reducer: expenseReducer, // Передаем корневой редюсер в качестве аргумента
  });
  

export default store;
