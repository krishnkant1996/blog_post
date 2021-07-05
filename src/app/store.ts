import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './Slices/blog';

export const store = configureStore({
  reducer: {
     blogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

