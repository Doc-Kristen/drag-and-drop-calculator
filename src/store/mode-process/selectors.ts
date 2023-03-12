import { NameSpace } from '../../helpers/const';
import { State } from '../../types/state';

export const getModeStatus = (state: State): boolean => state[NameSpace.MODE].isModeBuild;
