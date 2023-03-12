import { createAction } from "@reduxjs/toolkit";

export const Action = {
  SET_MODE: 'SET_MODE',
  SET_RESULT: 'SET_RESULT',
  SET_PREVIOS_NUMBER: 'SET_PREVIOS_NUMBER',
  SET_PRESENT_NUMBER: 'SET_PRESENT_NUMBER',
  SET_MATH_OPERATION: 'SET_MATH_OPERATION'
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

export { setModeAction, setResultAction, setPreviousNumber, setPresentNumber, setMathOperation }
