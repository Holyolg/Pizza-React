import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    //метод (функция) для библиотеки redux, сокращает стрелочную
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});
export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
