import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listingsReducer from '../features/listings/listingsSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
