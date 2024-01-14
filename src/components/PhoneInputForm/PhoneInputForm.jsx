import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  InputFormContainer,
  FormField,
  FormInput,
  FormButton,
  ErrorMessageStyled,
} from './PhoneInputForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'store';
import { Notify } from 'notiflix';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numberPattern =
  /^\+?\d{1,4}[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(namePattern, 'Name must contain only letters')
    .required('Name is required'),
  number: yup
    .string()
    .matches(numberPattern, 'Write a valid phone number')
    .required('Phone number is required'),
});

export const PhoneInputForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const addContact = data => {
    const isExist = contacts.find(({ name }) => data.name.trim() === name);

    if (isExist) {
      Notify.failure(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContactAction(data));
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <InputFormContainer>
        <FormField>
          Name:
          <FormInput
            type="text"
            name="name"
            required
            placeholder="Enter contact's name"
          />
          <ErrorMessage name="name" component={ErrorMessageStyled} />
        </FormField>
        <FormField>
          Number:
          <FormInput
            type="tel"
            name="number"
            required
            placeholder="Enter contact's phone number"
          />
          <ErrorMessage name="number" component={ErrorMessageStyled} />
        </FormField>
        <FormButton type="submit">Add</FormButton>
      </InputFormContainer>
    </Formik>
  );
};
