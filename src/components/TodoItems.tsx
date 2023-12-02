import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import Item from "./Item";
import { deleteAllTask, setAside } from "../Redux/Slice/todoSlice";

const TodoItems: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.task.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {todos.length === 0 ? (
        <div className=" text-xl mb-2">There are no current tasks</div>
      ) : (
        <div
          className=" hover:cursor-pointer mb-2 w-full flex justify-center py-2 rounded-full bg-gray-700 text-white"
          onClick={() => dispatch(deleteAllTask())}
        >
          Delete All Tasks
        </div>
      )}
      <div className=" flex flex-wrap">
        {todos.map((todo, index) => (
          <Item key={index} {...todo} />
        ))}
      </div>
      <div
        onClick={() => dispatch(setAside(true))}
        className={` h-40 mb-4 hover:cursor-pointer flex justify-center items-center rounded-xl w-full xl:w-64 border-2 border-gray-500`}
      >
        + Add New Task
      </div>
    </>
  );
};

export default TodoItems;
