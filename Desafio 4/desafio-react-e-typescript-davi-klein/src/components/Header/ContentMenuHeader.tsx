import { NavLink } from "react-router-dom";

export const ContentMenuHeader = () => {
  return (
    <>
      <div className="ContentHeader_wrapper">
        <NavLink to={"/"}>
          <button>CURSOS</button>
        </NavLink>
        <NavLink to={"/"}>
          <button>SAIBA MAIS</button>
        </NavLink>
        <NavLink to={"/"}>
          <button>INSTITUCIONAIS</button>
        </NavLink>
      </div>
    </>
  );
};
