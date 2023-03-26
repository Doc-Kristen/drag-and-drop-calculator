import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../helpers/const';
import { ModeProcess } from '../../types/state';
import { setComponentIdList, setModeAction } from '../action';

const initialState: ModeProcess = {
  isModeBuild: false,
  componentList: [] as { id: string }[]
};

export const modeProcess = createSlice({
  name: NameSpace.MODE,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setModeAction, (state, action) => {
        state.isModeBuild = action.payload;
      })
      .addCase(setComponentIdList, (state, action) => {
        if (action.payload.actionType === 'add') {
          state.componentList.push(action.payload.id);
        }
        if (action.payload.actionType === 'remove') {
          const newComponentList = state.componentList.filter(item => item.id !== action.payload.id.id);
          state.componentList = newComponentList;
        }
      });
  }
});
