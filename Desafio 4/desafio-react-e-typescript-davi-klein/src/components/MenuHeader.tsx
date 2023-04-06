import { ContentMenuHeader } from "./Header/ContentMenuHeader";

import CloseIcon from "./assets/imgs/SVGs/Close-button.svg";

interface MenuHeaderProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuHeader = ({ isOpened, setIsOpened }: MenuHeaderProps) => {
  return (
    <>
      <section className={`ModalWrapper ${isOpened && "opened"}`}>
        <div className="Modaltop">
          <span> ENTRAR </span>
          <button className="CloseButton" onClick={() => setIsOpened(false)}>
            <img src={CloseIcon} alt="CloseIcon" />
          </button>
        </div>
        <div className="ModalContent">
          <ContentMenuHeader />
        </div>
        <div className="ModalOuverlay"></div>
      </section>
    </>
  );
};
