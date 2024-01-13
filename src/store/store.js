import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer, filterReducer } from '../store';

const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
};

export const store = configureStore({ reducer });
