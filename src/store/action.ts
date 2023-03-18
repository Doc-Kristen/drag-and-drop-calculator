import { createAction } from "@reduxjs/toolkit";
import { Board, Boards, Item } from "../types/boards-list";

export const Action = {
  SET_MODE: 'SET_MODE',
  SET_RESULT: 'SET_RESULT',
  SET_PREVIOS_NUMBER: 'SET_PREVIOS_NUMBER',
  SET_PRESENT_NUMBER: 'SET_PRESENT_NUMBER',
  SET_MATH_OPERATION: 'SET_MATH_OPERATION',
  SET_BOARDS: 'SET_BOARDS',
  SET_BOARD: 'SET_BOARD',
  SET_ITEM: 'SET_ITEM',
};

const setModeAction = createAction(Action.SET_MODE, (value: boolean) => (
  {
    payload: value,
  }));


const setResultAction = createAction(Action.SET_RESULT, (value: string) => (
  {
    payload: value,
  }));

const setPreviousNumber = createAction(Action.SET_PREVIOS_NUMBER, (value: number | string) => (
  {
    payload: value,
  }));

const setPresentNumber = createAction(Action.SET_PRESENT_NUMBER, (value: number | string) => (
  {
    payload: value,
  }));

const setMathOperation = createAction(Action.SET_MATH_OPERATION, (value: string) => (
  {
    payload: value,
  }));

const setBoards = createAction(Action.SET_BOARDS, (value: Boards) => (
  {
    payload: value,
  }
));

const setItem = createAction(Action.SET_ITEM, (value: Item) => (
  {
    payload: value,
  }
));

const setBoard = createAction(Action.SET_BOARD, (value: Board) => (
  {
    payload: value,
  }
));

export { setModeAction, setResultAction, setPreviousNumber, setPresentNumber, setMathOperation, setBoards, setItem, setBoard}
