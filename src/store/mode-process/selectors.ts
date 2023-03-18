import { NameSpace } from '../../helpers/const';
import { Board, Boards, Item } from '../../types/boards-list';
import { State } from '../../types/state';

export const getModeStatus = (state: State): boolean => state[NameSpace.MODE].isModeBuild;

export const getBoards = (state: State): Boards => state[NameSpace.MODE].boards;

export const getBoard = (state: State): Board => state[NameSpace.MODE].board;

export const getItem = (state: State): Item => state[NameSpace.MODE].item;
