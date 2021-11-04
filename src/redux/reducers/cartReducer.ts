import { productInterface } from "../../interfaces";
import { CartInterface } from "../actions-interfaces/cartInterface";
import { CartType } from "../actions-interfaces/cartInterface";

interface stateInterface {
  cart: productInterface[];
}

const initialState = {
  cart: [],
};

export const getCartTotal = (cart: productInterface[]) =>
  cart?.reduce((quantity, item) => item.productPrice + quantity, 0);

const cartReducer = (
  state: stateInterface = initialState,
  action: CartInterface
): stateInterface => {
  switch (action.type) {
    case CartType.ADD_ITEM:
      const i = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );
      if (i >= 0) {
        alert(`item is already in cart, check cart to add more!`);
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, action.item])
      );

      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case CartType.REMOVE_ITEM:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    case CartType.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case CartType.INCREASE:
      let tempCart: productInterface[] = state.cart.map((item) => {
        if (item.id === action.id) {
          item = {
            ...item,
            quantity: item.quantity && item.quantity + 1,
            productPrice: item.quantity && item.productPrice * item.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case CartType.DECREASE:
      let tempCart2: productInterface[] = [];

      tempCart2 = state.cart.map((item) => {
        if (item.quantity === 1) {
          return item;
        } else if (item.id === action.id) {
          item = {
            ...item,
            quantity: item.quantity && item.quantity - 1,
          };
        }

        return item;
      });

      return { ...state, cart: tempCart2 };

    default:
      return state;
  }
};

export default cartReducer;
