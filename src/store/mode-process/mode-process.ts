import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../helpers/const';
import { Board, Boards, Item, } from '../../types/boards-list';
import { ModeProcess } from '../../types/state';
import { setBoard, setBoards, setComponentIdList, setItem, setModeAction } from '../action';

const initialState: ModeProcess = {
  isModeBuild: false,
  item: {} as Item,
  board: {} as Board,
  boards: [] as Boards,
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
      .addCase(setBoards, (state, action) => {
        state.boards = action.payload;
      })
      .addCase(setBoard, (state, action) => {
        state.board = action.payload;
      })
      .addCase(setItem, (state, action) => {
        state.item = action.payload;
      })
      .addCase(setComponentIdList, (state, action) => {
        state.componentList.push(action.payload);
      });
  }
});
