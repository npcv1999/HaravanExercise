import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/ReduxDemo/Counter/counterSlice';
import translateReducer from 'features/ReduxDemo/Translate/translateSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: translateReducer,
  },
});
