import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialTodo, todoType } from "../../Type";

const initialState: initialTodo = {
  todos: [],
  isAside: false,
};

export const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTodos: (state, actions: PayloadAction<todoType>) => {
      state.todos.push(actions.payload);
    },
    removeTodo: (state, actions: PayloadAction<number>) => {
      state.todos = state.todos.filter((obj) => obj.id !== actions.payload);
    },
    setAside: (state, actions: PayloadAction<boolean>) => {
      state.isAside = actions.payload;
    },
    setComplete: (state, actions: PayloadAction<number>) => {
      const findTasc = state.todos.find((obj) => obj.id === actions.payload);
      console.log(findTasc);
      if (!!findTasc) {
        findTasc.isCompleted = !findTasc.isCompleted;
      }
    },
    deleteAllTask: (state) => {
      state.todos = [];
    },
  },
});
export const { setTodos, removeTodo, setAside, setComplete, deleteAllTask } =
  todoSlice.actions;
export default todoSlice.reducer;
