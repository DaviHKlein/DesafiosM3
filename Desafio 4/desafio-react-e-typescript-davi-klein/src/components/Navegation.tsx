import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navegation.modules.scss";

export const Navegation = () => {
  const [isActive, setIsActive] = useState(false);

  const handlechange = () => {
    setIsActive((isActive) => !isActive);
  };

  let toggleClassCheck = isActive ? "active" : "";

  return (
    <>
      <nav className="MenuRoutes">
        <ul className="links_wrapper">
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/"}> Sobre </NavLink>
          </li>
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/Pagamentos"}> Formas de Pagamento </NavLink>
          </li>
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/Entrega"}> Entrega </NavLink>
          </li>
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/Devolução"}> Troca e Devolução </NavLink>
          </li>
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/Segurança"}> Segurança e Privacidade </NavLink>
          </li>
          <li className={`Title_links ${toggleClassCheck} `}>
            <NavLink to={"/Contatos"}> Contatos </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
