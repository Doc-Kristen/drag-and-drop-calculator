import { NameSpace } from '../../helpers/const';
import { ComponentIdList } from '../../types/boards-list';
import { State } from '../../types/state';

export const getModeStatus = (state: State): boolean => state[NameSpace.MODE].isModeBuild;

export const getComponentIdList = (state: State): ComponentIdList => state[NameSpace.MODE].componentList;
