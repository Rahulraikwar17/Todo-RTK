import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Check } from "lucide-react";
import { setEditTodo, setTodo, updateTodo } from "../redux/features/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.todo.editTodo);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      inputRef.current?.focus();
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editTodo) {
      dispatch(
        updateTodo({
          id: editTodo.id,
          title,
        }),
      );
      dispatch(setEditTodo(null));
    } else {
      dispatch(
        setTodo({
          id: Date.now(),
          title,
          isComplete: false,
        }),
      );
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5">
      <input
        ref={inputRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs doing?"
        className="flex-1 h-12 px-4 rounded-2xl bg-white/8 border border-white/15
                   text-[var(--text)] placeholder-white/35 text-[14px] outline-none
                   focus:border-white/35 focus:bg-white/12 transition-all duration-200"
        style={{ fontFamily: "'Inter', sans-serif" }}
      />
      <button
        type="submit"
        aria-label={editTodo ? "Update task" : "Add task"}
        className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500
                   flex items-center justify-center text-white
                   shadow-[0_6px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_8px_24px_rgba(168,85,247,0.5)]
                   hover:scale-[1.04] active:scale-[0.96] transition-all duration-200"
      >
        {editTodo ? <Check size={18} /> : <Plus size={18} />}
      </button>
    </form>
  );
};

export default AddTodo;
