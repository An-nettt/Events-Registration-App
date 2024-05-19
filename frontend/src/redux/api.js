import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000';

export const eventsAPI = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'events/addUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/', user);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
