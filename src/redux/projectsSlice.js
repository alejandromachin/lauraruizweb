//create a react toolkit slice to handle the projects
import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects: setProjectsActionCreator } = projectsSlice.actions;

export default projectsSlice.reducer;
