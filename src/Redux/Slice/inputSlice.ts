import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { todoType } from "../../Type";

const initialState: todoType = {
  id: 0,
  name: "",
  value: "",
  data: "",
  isCompleted: false,
};

export const todoSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setName: (state, actions: PayloadAction<string>) => {
      state.name = actions.payload;
    },
    setValue: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
    clearInputs: (state) => {
      state.name = "";
      state.value = "";
    },
  },
});
export const { setName, setValue, clearInputs } = todoSlice.actions;
export default todoSlice.reducer;
