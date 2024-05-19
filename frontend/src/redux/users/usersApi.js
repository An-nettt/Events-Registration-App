import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000/api';

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users', user);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
