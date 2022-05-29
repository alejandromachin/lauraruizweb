import { useDispatch } from "react-redux";
import { setFilterActionCreator } from "../../redux/projectsFilterSlice";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const setFilter = (filter) => {
    dispatch(setFilterActionCreator(filter));
  };

  return (
    <>
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
    </>
  );
};

export default FilterMenu;
