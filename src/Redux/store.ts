import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slice/todoSlice";
import inputSlice from "./Slice/inputSlice";

export const store = configureStore({
  reducer: { task: todoSlice, input: inputSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
