
type Item = {
  id: number;
  item: JSX.Element;
};

type Items = Item[];

type Board = {
  id: number;
  title: string;
  items: Items;
};

type Boards = Board[];

type ComponentIdList = { id: string }[];


export type { Item, Items, Board, Boards, ComponentIdList };
