import React from "react";
import AddTodo from "./components/AddTodo";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./components/TodoCard";
import darkBg from "./assets/bgvdo.mp4";
import lightBg from "./assets/bgvdo3.mp4";
import { AnimatePresence, motion } from "framer-motion";
const App = () => {
  const todos = useSelector((state) => state.todo.todo);
  const activeTab = useSelector((state) => state.todo.activeTab);
  const filteredTodos = todos.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return !item.isComplete;
    if (activeTab === "completed") return item.isComplete;
  });
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div className={`${theme} h-screen w-full relative overflow-hidden`}>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          src={`${darkBg}`}
          loop
          muted
          autoPlay
          poster="https://images.pexels.com/photos/11568595/pexels-photo-11568595.jpeg"
          className="w-full object-cover h-full"
        ></video>
      </div>

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          src={`${lightBg}`}
          loop
          muted
          poster="https://images.pexels.com/photos/11568595/pexels-photo-11568595.jpeg"
          autoPlay
          className="w-full object-cover h-full"
        ></video>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center max-[426px]:p-2">
        <div
          className="w-full max-w-md max-h-[90vh] flex flex-col rounded-[32px] p-7
      bg-white/1 backdrop-blur-xl border border-white/15
      shadow-[0_25px_70px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.15)]"
        >
          <Navbar filteredTodos={filteredTodos} />

          <div className="mb-5">
            <AddTodo />
          </div>

          <Tabs />

          <div
            className="flex flex-col gap-3 min-h-[20vh] max-[426px]:h-[60vh] overflow-y-auto pr-1"
            style={{ scrollbarWidth: "none" }}
          >
            <AnimatePresence>
              {filteredTodos.length === 0 ? (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-[var(--sub-text)]"
                >
                  No Todos
                </motion.h1>
              ) : (
                filteredTodos.map((elem) => (
                  <motion.div
                    key={elem.id}
                    layout
                    className="mb-0.5 last:mb-0"
                    initial={{
                      opacity: 0,
                      y: -30,
                      scale: 0.9,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: 60,
                      scale: 0.9,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <TodoCard elem={elem} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
