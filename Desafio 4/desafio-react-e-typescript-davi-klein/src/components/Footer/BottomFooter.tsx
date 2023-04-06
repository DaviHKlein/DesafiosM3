import Vtex from "../assets/imgs/SVGs/Vtex-logo.svg";
import M3 from "../assets/imgs/SVGs/M3-logo.svg";

import Master from "../assets/imgs/SVGs/credit-cards/Master.svg";
import Visa from "../assets/imgs/SVGs/credit-cards/Visa.svg";
import Diners from "../assets/imgs/SVGs/credit-cards/Diners.svg";
import Elo from "../assets/imgs/SVGs/credit-cards/Elo.svg";
import Hiper from "../assets/imgs/SVGs/credit-cards/Hiper.svg";
import Pagseguro from "../assets/imgs/SVGs/credit-cards/Pagseguro.svg";
import Boleto from "../assets/imgs/SVGs/credit-cards/Boleto.svg";
import vtex from "../assets/imgs/SVGs/credit-cards/vtex-pci-200.svg";

export const BottomFooter = () => {
  return (
    <>
      <div className="Bottom_Wrapper">
        <span className="corporateName">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </span>

        <div className="Payment_methods">
          <img className="carts_icons" src={Master} alt="Master-icon" />
          <img className="carts_icons" src={Visa} alt="Visa-icon" />
          <img className="carts_icons" src={Diners} alt="Diners-icon" />
          <img className="carts_icons" src={Elo} alt="Elo-icon" />
          <img className="carts_icons" src={Hiper} alt="Hiper-icon" />
          <img className="carts_icons" src={Pagseguro} alt="Pagseguro-icon" />
          <img className="carts_icons" src={Boleto} alt="Boleto-icon" />

          <span className="div_icons"> </span>
          <img className="vtex_icon" src={vtex} alt="vtex-icon" />
        </div>

        <div className="Authors">
          <span className="Powered_by"> Powered by </span>
          <img className="vtex_logo" src={Vtex} alt="Vtex-logo" />

          <span className="Developed_by"> Developed by </span>
          <img className="m3_logo" src={M3} alt="M3-logo" />
        </div>
      </div>
    </>
  );
};
