import { useDispatch, useSelector } from "react-redux";
import projects from "../../data/projects";

import {
  filterProjectsActionCreator,
  showAllProjectsActionCreator,
} from "../../redux/projectsSlice";
import FilterButtonContainer from "../../styles/filterButton";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const setFilter = (filter) => {
    dispatch(filterProjectsActionCreator(filter));
  };
  const showAllProjects = () => {
    dispatch(showAllProjectsActionCreator(projects));
  };

  const filter = useSelector((state) => state.projectsFilter.filter);

  return (
    <FilterButtonContainer>
      <button
        className={filter === "all" ? "current" : ""}
        style={{ zIndex: 1 }}
        onClick={() => showAllProjects()}
      >
        All
      </button>
      <button
        className={filter === "Commercial" ? "current" : ""}
        style={{ zIndex: 1 }}
        onClick={() => setFilter("Commercial")}
      >
        Commercials
      </button>
      <button
        className={filter === "Music Video" ? "current" : ""}
        style={{ zIndex: 1 }}
        onClick={() => setFilter("Music Video")}
      >
        Music Videos
      </button>
      <button
        className={filter === "fiction" ? "current" : ""}
        style={{ zIndex: 1 }}
        onClick={() => setFilter("fiction")}
      >
        Fiction
      </button>
      <button
        className={filter === "2ad" ? "current" : ""}
        style={{ zIndex: 1 }}
        onClick={() => setFilter("2ad")}
      >
        2nd AD
      </button>
    </FilterButtonContainer>
  );
};

export default FilterMenu;
