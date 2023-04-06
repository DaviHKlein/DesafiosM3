import { MenuList1, MenuList2, MenuList3 } from "./MenuListFooter";
import { useState } from "react";

export const Contact = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpened2, setIsOpened2] = useState(false);
  const [isOpened3, setIsOpened3] = useState(false);
  if (window.innerWidth > 1024) {
    return (
      <>
        <div className="Contact_wrapper">
          <div className="Menu_folder">
            <h5> Institucional </h5>
            <MenuList1 />
          </div>
          <div className="Menu_folder">
            <h5> Dúvidas </h5>
            <MenuList2 />
          </div>
          <div className="Menu_folder">
            <h5> Fale Conosco </h5>
            <MenuList3 />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Contact_wrapper">
          <div
            className="Menu_folder"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <h5> Institucional </h5>
            {isOpened && <MenuList1 />}
          </div>
          <div
            className="Menu_folder"
            onClick={() => {
              setIsOpened2(!isOpened2);
            }}
          >
            <h5> Dúvidas </h5>
            {isOpened2 && <MenuList2 />}
          </div>
          <div
            className="Menu_folder"
            onClick={() => {
              setIsOpened3(!isOpened3);
            }}
          >
            <h5> Fale Conosco </h5>
            {isOpened3 && <MenuList3 />}
          </div>
        </div>
      </>
    );
  }
};
