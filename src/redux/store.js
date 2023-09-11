import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filtered';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
