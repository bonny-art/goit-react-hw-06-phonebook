import { createReducer } from '@reduxjs/toolkit';

import { LS_KEY } from 'store/constants';
import {
  addContactAction,
  deleteContactAction,
  setContactsAction,
} from './contactsActions';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(LS_KEY)) || [],
};

export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContactAction, (state, { payload }) => {
      // return {
      //   ...state,
      //   contacts: [action.payload, ...state.contacts],
      // };
      state.contacts.unshift(payload);
    })
    .addCase(deleteContactAction, (state, { payload }) => {
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(c => c.id !== action.payload),
      // };
      state.contacts = state.contacts.filter(c => c.id !== payload);
    })
    .addCase(setContactsAction, (state, { payload }) => {
      // return {
      //   ...state,
      //   contacts: [...action.payload],
      // };
      state.contacts = payload;
    });
});
