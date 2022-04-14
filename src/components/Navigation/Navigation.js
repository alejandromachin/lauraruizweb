import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to={"/home"}>Gallery</Link>
        </li>
        <li>
          <Link to={"/projectlist"}>List</Link>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
