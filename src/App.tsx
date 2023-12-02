import { RootState } from "./Redux/store";
import { useAppSelector } from "./Type";
import Aside from "./components/Aside";
import TodoDash from "./components/TodoDash";

function App() {
  const isAside = useAppSelector((state: RootState) => state.task.isAside);
  return (
    <div
      className={`${
        isAside ? "" : " justify-center"
      } xl:flex bg-gray-900 min-h-screen text-white p-5`}
    >
      {isAside && <Aside />}
      <TodoDash />
    </div>
  );
}

export default App;
