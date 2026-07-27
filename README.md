# Todo App — React + Redux Toolkit

A minimal, glassmorphism-styled todo app built with React, Redux Toolkit, and Tailwind CSS. Todos persist in `localStorage`, so your list survives a page refresh.

**Live demo:** [todo-rtk-ochre.vercel.app](https://todo-rtk-ochre.vercel.app/)

## Features

- Add, edit, complete, and delete todos
- Filter by **All / Active / Completed** via a tab switcher
- Reset/clear all todos with a confirmation prompt
- Todos persist across sessions using `localStorage`
- Glassmorphism UI with a soft animated gradient background

## Tech Stack

- **React** (Vite)
- **Redux Toolkit** — global state management
- **Tailwind CSS** — styling
- **lucide-react** — icons

## Redux State Shape

```js
{
  todo: {
    todo: [],          // array of { id, title, isComplete }
    activeTab: "all",  // "all" | "active" | "completed"
    editTodo: null,    // currently edited todo, or null
  }
}
```

## Available Actions

| Action           | Description                              |
|------------------|-------------------------------------------|
| `setTodo`        | Add a new todo                            |
| `setDeleteTodo`  | Delete a todo by id                       |
| `setCompleteTodo`| Toggle a todo's completed state           |
| `setEditTodo`    | Set (or clear) the todo currently editing |
| `updateTodo`     | Save edits to an existing todo's title    |
| `setActiveTab`   | Change the active filter tab              |
| `resetData`      | Clear all todos from state and storage    |



