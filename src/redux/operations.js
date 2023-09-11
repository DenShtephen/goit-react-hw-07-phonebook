import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64fd8e8b596493f7af7e52c8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch-contacts',
  async (_, thinkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error._message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contact/add-contact',
  async ({ name, number }, thinkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: name,
        number: number,
      });
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error._message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contact/delete-contact',
  async (contactId, thinkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error._message);
    }
  }
);
