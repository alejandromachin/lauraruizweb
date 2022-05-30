import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import projectsFilterReducer from "./projectsFilterSlice";
import projectsReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    projectsFilter: projectsFilterReducer,
    projects: projectsReducer,
  },
});

export default store;
