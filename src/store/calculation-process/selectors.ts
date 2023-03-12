import { NameSpace } from "../../helpers/const";
import { State } from "../../types/state";

export const getCalculationResult = (state: State): string | number => state[NameSpace.CALCULATION].result;

export const getPreviosNumber = (state: State): number | undefined | string=> state[NameSpace.CALCULATION].previousNumber;

export const getPresentNumber = (state: State): number | undefined | string=> state[NameSpace.CALCULATION].presentNumber;

export const getMathOperation = (state: State): string | undefined => state[NameSpace.CALCULATION].mathOperation;
