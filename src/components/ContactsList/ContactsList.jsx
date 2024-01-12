import React from 'react';

import { ContactsListItem } from 'components';

import { ContactsListContainer } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsListContainer>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          ></ContactsListItem>
        );
      })}
    </ContactsListContainer>
  );
};
