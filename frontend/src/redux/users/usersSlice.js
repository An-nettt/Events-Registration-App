import { createSlice } from '@reduxjs/toolkit';
import { usersInitialState } from './usersInitialState';
import { addUser } from './usersApi';
import {
  handlePending,
  AddHandleFulfilled,
  handleRejected,
} from './usersHandlers';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState.users,
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, handlePending)
      .addCase(addUser.fulfilled, AddHandleFulfilled)
      .addCase(addUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
