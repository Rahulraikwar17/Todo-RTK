import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("theme") || "dark",
  },
  reducers: {
    setThemeToggle(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { setThemeToggle } = themeSlice.actions;
export default themeSlice.reducer;
