export enum CartType {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  EMPTY_CART = "EMPTY_CART",
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface AddItem {
  type: CartType.ADD_ITEM;
  item: {
    id: number;
    imageLink: string;
    productTitle: string;
    productPrice: number;
    quantity: number;
  };
}

interface RemoveItem {
  type: CartType.REMOVE_ITEM;
  id: number;
}

interface EmptyCart {
  type: CartType.EMPTY_CART;
}

interface Increase {
  type: CartType.INCREASE;
  id: number;
}

interface Decrease {
  type: CartType.DECREASE;
  id: number;
}

export type CartInterface =
  | AddItem
  | RemoveItem
  | EmptyCart
  | Increase
  | Decrease;
