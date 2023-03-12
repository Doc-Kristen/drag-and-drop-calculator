import { NameSpace } from "../../helpers/const";
import { State } from "../../types/state";

export const getCalculationResult = (state: State): number => state[NameSpace.CALCULATION].result;
