import { createReducer } from '@reduxjs/toolkit';
import { setModeAction, setResultAction } from './action';

const initialState = {
  isModeBuild: false,
  result: 0
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setModeAction, (state, action) => {
      state.isModeBuild = action.payload;
    })
    .addCase(setResultAction, (state, action) => {
      state.result = action.payload;
    });
});
