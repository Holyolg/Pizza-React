import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFrormLS } from "../../utils/getCartFormLS";

import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = getCartFrormLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /*addItems(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItems(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (findItem) {
				findItem.count--;
			}
		},*/
    addItems(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.sizes === payload.sizes &&
          obj.type === payload.type
        );
      });
      findItem
        ? findItem.count++
        : state.items.push({
            ...payload,
            count: 1,
          });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItems(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.sizes === payload.sizes &&
          obj.type === payload.type
        );
      });
      findItem && findItem.count--;
      state.totalPrice -= Number(findItem!.price);
    },
    /*removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      console.log(action.payload);
    },*/

    removeItems(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.sizes === payload.sizes &&
          obj.type === payload.type
        );
      });

      state.totalPrice -= findItem!.price * findItem!.count;
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== payload.id ||
          obj.sizes !== payload.sizes ||
          obj.type !== payload.type
        );
      });
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItems } =
  cartSlice.actions;

export default cartSlice.reducer;
