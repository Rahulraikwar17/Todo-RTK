import React from "react";
import { Pencil, Check, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  setCompleteTodo,
  setDeleteTodo,
  setEditTodo,
} from "../redux/features/todoSlice";

const TodoCard = ({ elem }) => {
  const dispatch = useDispatch();

  return (
    <div className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
      <button
        onClick={() => dispatch(setCompleteTodo(elem))}
        aria-label="Toggle complete"
        className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
          elem.isComplete
            ? "bg-gradient-to-br from-emerald-400 to-teal-500 border-transparent"
            : "border-white/25 hover:border-white/50"
        }`}
      >
        {elem.isComplete && <Check size={11} className="text-white" strokeWidth={3} />}
      </button>

      <h1
        className={`flex-1 text-[14px] truncate transition-all duration-200 ${
          elem.isComplete ? "text-white/35 line-through" : "text-white/90"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {elem.title}
      </h1>

      <div className="flex items-center gap-1 transition-opacity duration-200">
        <button
          onClick={() => dispatch(setEditTodo(elem))}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:bg-white/15 hover:text-white transition-all duration-200"
        >
          <Pencil size={14} />
        </button>
        <button
          onClick={() => dispatch(setDeleteTodo(elem))}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:bg-white/15 hover:text-red-300 transition-all duration-200"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;