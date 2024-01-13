import { createReducer } from '@reduxjs/toolkit';

import { changeFilterAction } from './filterActions';

const initialState = {
  filter: '',
};

export const filterReducer = createReducer(initialState, builder => {
  builder.addCase(changeFilterAction, (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  });
});
