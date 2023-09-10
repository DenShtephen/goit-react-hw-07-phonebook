import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649496f90da866a9536803ee.mockapi.io';

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

export const addContact = createAsyncThunk(
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

export const deleteContact = createAsyncThunk(
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