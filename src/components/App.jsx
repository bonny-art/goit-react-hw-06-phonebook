import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PhoneInputForm, ContactsList, Filter } from 'components';
import { Section, Header, Title } from './Section/Section.styled';

const LS_KEY = 'phone_contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.find(({ name }) => name === contact.name.trim());

    if (isExist) {
      Notify.failure(`${contact.name} is already in contacts.`);
      return;
    }

    return setContacts(prev => [contact, ...prev]);
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(({ id }) => contactId !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
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
