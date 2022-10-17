import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const pizzaSlise = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});
export const { setItems } = pizzaSlise.actions;

export default pizzaSlise.reducer;
