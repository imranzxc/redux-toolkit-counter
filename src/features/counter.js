import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const inc = createAction('inc');
export const dec = createAction('dec');
export const res = createAction('res');
export const rand = createAction('rand');

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(inc, (state, action) => {
    state.value += 1;
  });
  builder.addCase(dec, (state, action) => {
    state.value -= 1;
  });
  builder.addCase(res, (state, action) => {
    state.value = 0;
  });
  builder.addCase(rand, (state, action) => {
    state.value = action.payload;
  });
});
