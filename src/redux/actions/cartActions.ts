import { productInterface } from "../../interfaces";
import { CartType } from "../actions-interfaces/cartInterface";

export const addItem = (product: productInterface) => {
  return { type: CartType.ADD_ITEM, item: product };
};

export const removeItem = (id: number) => {
  return { type: CartType.REMOVE_ITEM, id: id };
};

export const clearBasket = () => {
  return { type: CartType.EMPTY_CART };
};

export const increase = (id: number) => {
  return { type: CartType.INCREASE, id: id };
};

export const decrease = (id: number) => {
  return { type: CartType.DECREASE, id: id };
};
