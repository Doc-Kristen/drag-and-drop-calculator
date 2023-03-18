import { store } from '../store/index';
import { Board, Boards, Item } from './boards-list';

type ModeProcess = {
  isModeBuild: boolean,
  item: Item,
  board: Board,
  boards: Boards
}

type CalculationProcess = {
  result: string | number;
  previousNumber?: string | number,
  presentNumber?: string | number,
  mathOperation?: string
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { State, AppDispatch, ModeProcess, CalculationProcess };
