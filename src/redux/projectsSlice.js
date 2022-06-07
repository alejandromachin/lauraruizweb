import { createSlice } from "@reduxjs/toolkit";
import projects from "../data/projects";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    filterProjects: (state, action) => {
      state.projects = projects.filter(
        (project) => project.category === action.payload
      );
    },
    showAllProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const {
  setProjects: setProjectsActionCreator,
  filterProjects: filterProjectsActionCreator,
  showAllProjects: showAllProjectsActionCreator,
} = projectsSlice.actions;

export default projectsSlice.reducer;
