import React from 'react';

import { FilterSection, FormField, FormInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <FormField>
        Search:
        <FormInput
          type="text"
          name="name"
          placeholder="Start printing name here"
          value={value}
          onChange={onChange}
        />
      </FormField>
    </FilterSection>
  );
};
