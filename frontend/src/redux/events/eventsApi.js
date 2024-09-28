import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://events-registration-app-backend-988z.onrender.com/api';

export const eventsAPI = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/events`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
