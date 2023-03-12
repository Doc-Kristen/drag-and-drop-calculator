import { createSlice } from "@reduxjs/toolkit";
import { NameSpace, STARTING_VALUE_DISPLAY } from "../../helpers/const";
import { CalculationProcess } from "../../types/state";
import { setResultAction } from "../action";

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
      });
  }
});
