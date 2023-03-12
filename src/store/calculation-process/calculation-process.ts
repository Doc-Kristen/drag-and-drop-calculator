import { createSlice } from "@reduxjs/toolkit";
import { NameSpace, STARTING_VALUE_DISPLAY } from "../../helpers/const";
import { CalculationProcess } from "../../types/state";
import { setMathOperation, setPresentNumber, setPreviousNumber, setResultAction } from "../action";

const initialState: CalculationProcess = {
  result: STARTING_VALUE_DISPLAY,
};

export const calculationProcess = createSlice({
  name: NameSpace.CALCULATION,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setResultAction, (state, action) => {
        state.result = action.payload;
      })
      .addCase(setPreviousNumber, (state, action) => {
        state.previousNumber = action.payload;
      })
      .addCase(setPresentNumber, (state, action) => {
        state.presentNumber = action.payload;
      })
      .addCase(setMathOperation, (state, action) => {
        state.mathOperation = action.payload;
      });
  }
});
