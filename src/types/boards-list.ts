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


export type { Item, Items, Board, Boards };
