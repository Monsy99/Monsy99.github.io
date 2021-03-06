import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
export const selectTheme = (state) => state.theme;
export const selectDarkTheme = (state) => selectTheme(state).darkTheme;
export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
