import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

import { Contact, Name, Number, DeleteButton } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Contact>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        <MdDeleteForever size={14} color={undefined} />
      </DeleteButton>
    </Contact>
  );
};
