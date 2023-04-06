import { useState } from "react";
import { NavLink } from "react-router-dom";

import LogoM3 from "../assets/imgs/SVGs/Logo-M3Academy_mobile.svg";
import CartIcon from "../assets/imgs/SVGs/minicart_mobile.svg";
import MenuHamburguer from "../assets/imgs/SVGs/MenuHamburguer.svg";
import { MenuHeader } from "../MenuHeader";

import "./HeaderMobile.modules.scss";

export const HeaderMobile = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <section className="HeaderMobile">
        <div className="topHeaderMobile">
          <MenuHeader isOpened={isOpened} setIsOpened={setIsOpened} />
          <button className="MenuIcon" onClick={() => setIsOpened(true)}>
            <img src={MenuHamburguer} alt="" />
          </button>
          <div>
            <NavLink to={"/"}>
              <img src={LogoM3} alt="LogoM3" className="M3Logo" />
            </NavLink>
          </div>
          <div>
            <NavLink to={"/"}>
              <img src={CartIcon} alt="CartIcon" className="CartIcon" />
            </NavLink>
          </div>
        </div>
        <div className="Search_Header_wrapper">
          <input className="Search_Header" placeholder="Buscar..." />
        </div>
      </section>
    </>
  );
};
