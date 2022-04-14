import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const currentPage = useLocation();

  return (
    <>
      <ul className="navigation">
        <li>
          <Link
            to={"/home"}
            className={currentPage.pathname === "/home" ? "currentPage" : " "}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to={"/projectlist"}
            className={
              currentPage.pathname === "/projectlist" ? "currentPage" : " "
            }
          >
            List
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
