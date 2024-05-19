import { createSlice } from '@reduxjs/toolkit';
import { eventsInitialState } from './initialState';
import { eventsAPI, addUser } from './api';
import {
  handlePending,
  handleFulfilled,
  AddHandleFulfilled,
  handleRejected,
} from './handlers';

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

const usersSlice = createSlice({
  name: 'users',
  initialState: eventsInitialState.users,
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, handlePending)
      .addCase(addUser.fulfilled, AddHandleFulfilled)
      .addCase(addUser.rejected, handleRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
