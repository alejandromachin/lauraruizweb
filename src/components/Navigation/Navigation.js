import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={""}>Gallery</Link>
        </li>
        <li>
          <Link to={""}>List</Link>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
