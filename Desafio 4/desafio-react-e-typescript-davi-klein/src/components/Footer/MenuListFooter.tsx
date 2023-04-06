import { NavLink } from "react-router-dom";

interface MenuFooterProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuList1 = () => {
  return (
    <>
      <NavLink className={`links_footer`} to={"/"}>
        Quem Somos
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        Política de Privacidade
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        Segurança
      </NavLink>
      <NavLink className={"links_footer last"} to={"/"}>
        Seja um Revendedor
      </NavLink>
    </>
  );
};

export const MenuList2 = () => {
  return (
    <>
      <NavLink className={"links_footer"} to={"/"}>
        Entrega
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        Pagamento
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        Trocas e Devoluções
      </NavLink>
      <NavLink className={"links_footer last"} to={"/"}>
        Dúvidas Frequentes
      </NavLink>
    </>
  );
};

export const MenuList3 = () => {
  return (
    <>
      <NavLink className={"links_footer"} to={"/"}>
        Atendimento ao Consumidor
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        (11) 4159-9504
      </NavLink>
      <NavLink className={"links_footer"} to={"/"}>
        Atendimento Online
      </NavLink>
      <NavLink className={"links_footer last"} to={"/"}>
        (11) 99433-8825
      </NavLink>
    </>
  );
};
