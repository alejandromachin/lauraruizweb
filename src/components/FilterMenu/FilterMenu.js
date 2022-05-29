import { useDispatch } from "react-redux";
import { setFilterActionCreator } from "../../redux/projectsFilterSlice";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const setFilter = (filter) => {
    dispatch(setFilterActionCreator(filter));
  };

  return (
    <>
      <button onClick={setFilter("Music Video")}>Music Videos</button>
    </>
  );
};

export default FilterMenu;
