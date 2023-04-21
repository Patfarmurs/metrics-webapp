// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './reducer/reducer';

const store = configureStore({
  reducer: charactersReducer,
});

export default store;
