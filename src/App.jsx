import React from "react";
import AddTodo from "./components/AddTodo";
import Tabs from "./components/Tabs";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./components/TodoCard";
import { ListTodo, Trash2 } from "lucide-react";
import { resetData } from "./redux/features/todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todo.todo);
  const activeTab = useSelector((state) => state.todo.activeTab);
  const dispatch = useDispatch();
  const filteredTodos = todos.filter((item) => {
    if (activeTab === "all") {
      return true;
    }

    if (activeTab === "active") {
      return !item.isComplete;
    }

    if (activeTab === "completed") {
      return item.isComplete;
    }
  });

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #4C3A9E 0%, transparent 45%), radial-gradient(circle at 80% 15%, #7A4FC4 0%, transparent 40%), radial-gradient(circle at 85% 85%, #1F8A8C 0%, transparent 45%), linear-gradient(160deg, #1A1233 0%, #2A1B4D 45%, #14352F 100%)",
      }}
    >
      <div
        className="relative w-full max-w-md rounded-[32px] p-7 bg-white/10 backdrop-blur-2xl
                   border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.15)]"
      >
        <div className="flex items-center justify-between mb-1">
          <h1
            className="text-white text-[24px] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
          >
            Tasks
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (
                  confirm(
                    "This'll delete all your todos permanently. Continue?",
                  )
                ) {
                  dispatch(resetData());
                }
              }}
              className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-red-300 transition-all duration-200"
            >
              <Trash2 size={14} />
            </button>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[12px]">
              <ListTodo size={13} />
              {filteredTodos.length}
            </span>
          </div>
        </div>
        <p
          className="text-white/40 text-[13px] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Stay on top of what matters today
        </p>

        <div className="mb-5">
          <AddTodo />
        </div>

        <Tabs />

        <div className="flex flex-col gap-3 min-h-[20vh]">
          {filteredTodos.length === 0 ? (
            <h1 className="text-center text-white/40">No Todos</h1>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredTodos.map((elem) => (
                <TodoCard key={elem.id} elem={elem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
