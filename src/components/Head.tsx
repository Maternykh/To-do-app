import React from "react";
import { useAppDispatch } from "../Type";
import { setAside } from "../Redux/Slice/todoSlice";

const Head: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex justify-between mb-5">
      <div className=" border-b-2 border-green-500 text-2xl">All Tasks</div>
      <div
        onClick={() => dispatch(setAside(true))}
        className=" hover:cursor-pointer border-neutral-500 flex justify-center items-center text-xl h-8 w-8 border-2 rounded-full"
      >
        +
      </div>
    </div>
  );
};

export default Head;
