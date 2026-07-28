import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListTodo, Moon, Sun, Trash2 } from "lucide-react";
import { resetData } from "../redux/features/todoSlice";
import { setThemeToggle } from "../redux/features/themeSlice";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);
  const theme = useSelector((state) => state.theme.mode);
  console.log(todos);
  const completed = todos.filter((elem) => {
    return elem.isComplete;
  });

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <h1
          className="text-[var(--text)] text-[24px] tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
        >
          Tasks
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(setThemeToggle())}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--sub-text)] hover:bg-white/10 hover:text-[#CA3DFE] transition-all duration-200"
          >
            {theme == "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => {
              if (
                confirm("This'll delete all your todos permanently. Continue?")
              ) {
                dispatch(resetData());
              }
            }}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--sub-text)] hover:bg-white/10 hover:text-red-300 transition-all duration-200"
          >
            <Trash2 size={20} />
          </button>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[var(--sub-text)] text-[12px]">
            <ListTodo size={13} />

            <AnimatePresence mode="popLayout">
              <motion.span
                key={completed.length}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {completed.length}
              </motion.span>
            </AnimatePresence>

            <span>of</span>

            <AnimatePresence mode="popLayout">
              <motion.span
                key={todos.length}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {todos.length}
              </motion.span>
            </AnimatePresence>

            <span>Done</span>
          </span>
        </div>
      </div>
      <p
        className="text-[var(--sub-text)] text-[13px] mb-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Stay on top of what matters today
      </p>
    </>
  );
};

export default Navbar;
