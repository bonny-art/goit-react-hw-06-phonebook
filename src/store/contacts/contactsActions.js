import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContactAction = createAction('contacts/addContact', data => {
  const newTodo = {
    ...data,
    id: nanoid(),
  };
  return { payload: newTodo };
});

export const deleteContactAction = createAction('contacts/deleteContact');

export const setContactsAction = createAction('contacts/setContacts');
