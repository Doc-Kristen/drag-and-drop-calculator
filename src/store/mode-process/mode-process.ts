import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../helpers/const';
import { ModeProcess } from '../../types/state';
import { setModeAction, } from '../action';

const initialState: ModeProcess = {
  isModeBuild: false,
};

export const modeProcess = createSlice({
  name: NameSpace.MODE,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setModeAction, (state, action) => {
        state.isModeBuild = action.payload;
      });
  }
});
