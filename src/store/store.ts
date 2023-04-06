import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './modules/apiSlice';
import cartSlice, { CartState } from './modules/cartSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// src/store/store.ts (or src/redux/types.ts)

export interface RootState {
  cart: CartState;
}

export type AppDispatch = typeof store.dispatch;
