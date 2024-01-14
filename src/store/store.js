import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer, filterReducer } from '../store';

const persistConfig = {
  key: 'phone_contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const reducer = {
  filter: filterReducer,
  contacts: persistedReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);
