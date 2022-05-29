import { useDispatch } from "react-redux";
import { setFilterActionCreator } from "../../redux/projectsFilterSlice";
import FilterButtonContainer from "../../styles/filterButton";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const setFilter = (filter) => {
    dispatch(setFilterActionCreator(filter));
  };

  return (
    <FilterButtonContainer>
      <button style={{ zIndex: 1 }} onClick={() => setFilter("Music Video")}>
        Music Videos
      </button>
      <button style={{ zIndex: 1 }} onClick={() => setFilter("Commercial")}>
        Commercials
      </button>
      <button style={{ zIndex: 1 }} onClick={() => setFilter("fiction")}>
        Fiction
      </button>
      <button style={{ zIndex: 1 }} onClick={() => setFilter("2ad")}>
        2nd AD
      </button>
    </FilterButtonContainer>
  );
};

export default FilterMenu;
