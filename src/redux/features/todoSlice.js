import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: JSON.parse(localStorage.getItem("todoList")) || [],
    activeTab: "all",
    editTodo: null,
  },

  reducers: {
    setTodo(state, action) {
      state.todo.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },

    setDeleteTodo(state, action) {
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },

    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },

    setCompleteTodo(state, action) {
      const todo = state.todo.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.isComplete = !todo.isComplete;
      }

      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },

    setEditTodo(state, action) {
      state.editTodo = action.payload;
    },

    updateTodo(state, action) {
      const todo = state.todo.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
      }

      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },
    resetData(state) {
      localStorage.removeItem("todoList");
      state.todo = [];
    },
  },
});

export const {
  setTodo,
  setDeleteTodo,
  setActiveTab,
  setCompleteTodo,
  setEditTodo,
  updateTodo,
  resetData,
} = todoSlice.actions;

export default todoSlice.reducer;
