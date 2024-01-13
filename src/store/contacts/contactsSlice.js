import { createSlice, nanoid } from '@reduxjs/toolkit';

import { LS_KEY } from 'constants';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(LS_KEY)) || [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      prepare: data => {
        const newTodo = {
          ...data,
          id: nanoid(),
        };
        return { payload: newTodo };
      },
      reducer: (state, { payload }) => {
        state.contacts.unshift(payload);
      },
    },
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    setContactsAction: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, deleteContactAction, setContactsAction } =
  contactsSlice.actions;
