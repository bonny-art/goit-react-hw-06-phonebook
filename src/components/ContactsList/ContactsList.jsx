import React from 'react';

import { ContactsListItem } from 'components';

import { ContactsListContainer } from './ContactsList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ContactsListContainer>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactsListItem>
        );
      })}
    </ContactsListContainer>
  );
};
