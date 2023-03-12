import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../helpers/const';
import { calculationProcess } from './calculation-process/calculation-process';
import { modeProcess } from './mode-process/mode-process';

export const rootReducer = combineReducers({
  [NameSpace.MODE]: modeProcess.reducer,
  [NameSpace.CALCULATION]: calculationProcess.reducer,
});
