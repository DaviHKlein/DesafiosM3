import Wpp from "../assets/imgs/SVGs/whatsapp.svg";
import Ellipse from "../assets/imgs/SVGs/Ellipse.svg";
import { useEffect } from "react";

export const WppIcon = () => {
  return (
    <>
      <div className="Wpp-Icon">
        <a
          className="Chat_button"
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Wpp} alt="Wpp-logo" />
        </a>
        <div className="button_wrapper">
          <img
            className="Button_wpp"
            src={Ellipse}
            alt="Ellipse-logo"
            onClick={(e) => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </>
  );
};
