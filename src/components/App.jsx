import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PhoneInputForm, ContactsList, Filter } from 'components';
import { Section, Header, Title } from './Section/Section.styled';
import {
  addContactAction,
  deleteContactAction,
  changeFilterAction,
} from 'store';
import { LS_KEY } from 'store/constants';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  console.log('contacts :>> ', contacts);
  console.log('filter :>> ', filter);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const isExist = contacts.find(({ name }) => data.name.trim() === name);

    if (isExist) {
      Notify.failure(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContactAction(data));
  };

  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value.toLowerCase()));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Section>
      <Header>Phonebook</Header>
      <PhoneInputForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} value={filter} />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Section>
  );
};
