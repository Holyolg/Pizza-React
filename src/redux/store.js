import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
//обязательно назвать значение ключа объекта filterSlice другим именем, отличным от filterSlice
export const store = configureStore({
  reducer: {
    filter,
  },
});
