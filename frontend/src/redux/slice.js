import { createSlice } from '@reduxjs/toolkit';
import { eventsInitialState } from './initialState';
import { eventsAPI } from './api';
import { handlePending, handleFulfilled, handleRejected } from './handlers';

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(eventsAPI.pending, handlePending)
      .addCase(eventsAPI.fulfilled, handleFulfilled)
      .addCase(eventsAPI.rejected, handleRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
