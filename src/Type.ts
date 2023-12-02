import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";

export interface todoType {
  id: number;
  name: string;
  value: string;
  data: string;
  isCompleted: boolean;
}
export interface initialTodo {
  todos: todoType[];
  isAside: boolean;
}
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
