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
    .addCase(addContactAction, (state, action) => {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    })
    .addCase(deleteContactAction, (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload),
      };
    })
    .addCase(setContactsAction, (state, action) => {
      return {
        ...state,
        contacts: [...action.payload],
      };
    });
});
