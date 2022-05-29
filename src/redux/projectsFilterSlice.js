import { createSlice } from "@reduxjs/toolkit";

const projectsFilterSlice = createSlice({
  name: "projectsFilter",
  initialState: {
    filter: "all",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter: setFilterActionCreator } =
  projectsFilterSlice.actions;

export default projectsFilterSlice.reducer;
