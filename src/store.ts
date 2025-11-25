import { configureStore } from '@reduxjs/toolkit';
import dataUpdateReducer from './dataSlice';

 const store = configureStore({
  reducer: {
    data_update: dataUpdateReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;