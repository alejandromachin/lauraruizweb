//create a slice to handle the menu show and hide
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: true,
  },
  reducers: {
    showMenu: (state) => {
      state.showMenu = true;
    },
    hideMenu: (state) => {
      state.showMenu = false;
    },
  },
});

export const {
  showMenu: showMenuActionCreator,
  hideMenu: hideMenuActionCreator,
} = menuSlice.actions;

export default menuSlice.reducer;
