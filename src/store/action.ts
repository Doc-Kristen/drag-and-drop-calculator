import { createAction } from "@reduxjs/toolkit";

export const Action = {
  SET_MODE: 'SET_MODE',
  SET_RESULT: 'SET_RESULT',
};

const setModeAction = createAction(Action.SET_MODE, (value: boolean) => (
  {
    payload: value,
  }));


const setResultAction = createAction(Action.SET_RESULT, (value: number) => (
  {
    payload: value,
  }));

export { setModeAction, setResultAction }
