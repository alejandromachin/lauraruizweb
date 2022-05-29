import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import projectsFilterReducer from "./projectsFilterSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    projectsFilter: projectsFilterReducer,
  },
});

export default store;
