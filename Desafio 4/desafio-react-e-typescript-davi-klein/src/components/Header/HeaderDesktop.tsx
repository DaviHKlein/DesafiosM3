import React from "react";
import { NavLink } from "react-router-dom";

import LogoM3 from "../assets/imgs/SVGs/M3Logo_desktop.svg";
import CartIcon from "../assets/imgs/SVGs/CartIcon_desktop.svg";

import { ContentMenuHeader } from "./ContentMenuHeader";

import "./HeaderDesktop.modules.scss";

export const HeaderDesktop = () => {
  return (
    <>
      <section className="HeaderDesktop">
        <div className="m3LogoWrapper">
          <NavLink to={"/"}>
            <img src={LogoM3} alt="LogoM3" className="M3Logo" />
          </NavLink>
        </div>
        <div className="Search_Header_wrapper">
          <input
            name="Search_Header"
            className="Search_Header"
            placeholder="Buscar..."
          />
          <label className="InconWrapper" htmlFor={"Search_Header"}></label>
        </div>
        <div className="Headerlinks">
          <NavLink to={"/"} className="EnterLink">
            ENTRAR
          </NavLink>
          <div className="CartIcon_Wrapper">
            <NavLink to={"/"}>
              <img src={CartIcon} alt="Cart-Icon" className="CartIcon" />
            </NavLink>
          </div>
        </div>
      </section>
      <div className="Header_botom">
        <ContentMenuHeader />
      </div>
    </>
  );
};
