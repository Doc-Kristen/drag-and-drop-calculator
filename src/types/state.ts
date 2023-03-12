import { store } from '../store/index';

type ModeProcess = {
  isModeBuild: boolean,
}

type CalculationProcess = {
  result: number;
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { State, AppDispatch, ModeProcess, CalculationProcess };
