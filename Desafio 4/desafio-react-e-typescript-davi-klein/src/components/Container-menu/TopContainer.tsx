import { NavLink } from "react-router-dom";

import HouseIcon from "../assets/imgs/SVGs/house-icon.svg";
import Arrow from "../assets/imgs/SVGs/arrow-point-to-right.svg";

import "./TopContainer.modules.scss";

export const TopContainer = () => {
  return (
    <>
      <div className="TopIcons">
        <NavLink className="HouseIcon" to={"/"}>
          <img src={HouseIcon} alt="HouseIcon" />
        </NavLink>
        <img className="Arrow" src={Arrow} alt="Arrow" />
        <span className="span_top"> institucional </span>
      </div>
      <div className="Title_wrapper">
        <h1 className="Title"> institucional </h1>
      </div>
    </>
  );
};
