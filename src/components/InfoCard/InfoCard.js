import { useSelector } from "react-redux";
import ContactMenu from "../ContactMenu/ContactMenu";
import FilterMenu from "../FilterMenu/FilterMenu";

const InfoCard = () => {
  const showMenu = useSelector((state) => state.menu.showMenu);

  return (
    <div className={showMenu ? "infoCard-container" : "hidden"}>
      <h1 className="infoCard-container__title">Laura Ruiz Penacho</h1>
      <p className="infoCard-container__text">
        As an assistant <br />
        director, I enable
        <br /> the creative team <br />
        to flourish.
      </p>
      <ContactMenu />
      <FilterMenu />
    </div>
  );
};
export default InfoCard;
