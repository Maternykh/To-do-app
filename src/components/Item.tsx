import React from "react";
import { todoType, useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { removeTodo, setComplete } from "../Redux/Slice/todoSlice";
import { FaTrashAlt } from "react-icons/fa";
const Item: React.FC<todoType> = ({ id, name, value, data, isCompleted }) => {
  const isAside = useAppSelector((state: RootState) => state.task.isAside);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${
        isAside ? "xl:w-64 w-full" : " w-full xl:w-96"
      } mb-4 xl:mr-3 flex flex-col justify-between bg-gray-800 p-3 rounded-xl border-2 border-gray-600`}
    >
      <div className=" text-xl mb-4">{name}</div>
      <div className=" mb-2">{value}</div>
      <div className=" mb-2">{data}</div>
      <div className=" flex flex-nowrap items-center justify-between">
        <div
          onClick={() => dispatch(setComplete(id))}
          className={`${
            isCompleted ? " bg-green-500 " : "bg-red-500 "
          } text-white hover:cursor-pointer w-min rounded-full py-1 px-2 `}
        >
          {isCompleted ? "Completed" : "Incomplete"}
        </div>
        <div
          onClick={() => dispatch(removeTodo(id))}
          className=" hover:cursor-pointer flex justify-center items-center mr-2"
        >
          <FaTrashAlt className=" flex justify-center items-center " />
        </div>
      </div>
    </div>
  );
};

export default Item;
