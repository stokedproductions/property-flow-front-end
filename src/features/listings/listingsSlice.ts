import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ListingsState } from './listing.interfaces';

const initialState: ListingsState = {
    listings: [],
    status: 'idle',
};

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const url = 'https://property-flow-backend-production.up.railway.app/listings';
    // TODO put this in the .env file
    const API_KEY = process.env.REACT_APP_API_KEY || "";

    // TODO add this to a try catch block
    const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "apiKey": API_KEY
        },
      });
    return response.json();
  }

);

export const ListingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'idle';
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Add actions when we need them
// export const {} = ListingsSlice.actions;
export default ListingsSlice.reducer;
