import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { clearInputs, setName, setValue } from "../Redux/Slice/inputSlice";
import { setAside, setTodos } from "../Redux/Slice/todoSlice";
import { IoMdArrowDropup } from "react-icons/io";
const Aside: React.FC = () => {
  const { name, value } = useAppSelector((state: RootState) => state.input);
  const OnClickAdd = (name: string, value: string) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const data = mm + "/" + dd + "/" + yyyy;
    const id = Math.random() * 100;
    const isCompleted = false;
    if (!!name && !!value) {
      dispatch(setTodos({ id, name, value, data, isCompleted }));
    }
    dispatch(clearInputs());
  };
  const dispatch = useAppDispatch();
  return (
    <div className=" mb-5 xl:mb-0 flex flex-col justify-center w-full xl:w-96 mr-5 bg-gray-800 p-3 rounded-xl border-2 border-gray-600">
      <div className=" flex justify-center text-xl mb-10">Add the task</div>
      <div>
        <input
          onChange={(e) => dispatch(setName(e.target.value))}
          value={name}
          placeholder="Enter name task"
          type="text"
          className=" mb-2 bg-gray-900 py-2 px-3 rounded-full outline-none border-none w-full "
        />
      </div>
      <div>
        <textarea
          onChange={(e) => dispatch(setValue(e.target.value))}
          value={value}
          className="bg-gray-900 py-2 px-3 rounded-2xl outline-none border-none w-full "
          placeholder="Enter value task"
        ></textarea>
      </div>
      <div
        onClick={() => OnClickAdd(name, value)}
        className=" mb-3 hover:cursor-pointer hover:border-white rounded-full border-2 bg-gray-900 border-gray-600 w-full flex justify-center py-2"
      >
        Add
      </div>
      <div
        onClick={() => dispatch(setAside(false))}
        className=" hover:cursor-pointer bg-gray-700 rounded-full py-2 flex justify-center "
      >
        <IoMdArrowDropup className="  text-xl items-center flex justify-center " />
      </div>
    </div>
  );
};

export default Aside;
