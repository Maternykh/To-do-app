import React from "react";
import Head from "./Head";
import TodoItems from "./TodoItems";
import { useAppSelector } from "../Type";
import { RootState } from "../Redux/store";

const TodoDash: React.FC = () => {
  const isAside = useAppSelector((state: RootState) => state.task.isAside);
  return (
    <div
      className={`${
        isAside ? " w-full xl:w-3/4" : " w-full"
      }  bg-gray-800 p-3 rounded-xl border-2 border-gray-600`}
    >
      <Head />
      <TodoItems />
    </div>
  );
};

export default TodoDash;
