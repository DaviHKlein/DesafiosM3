import React, { useState, useEffect } from "react";

import { HeaderDesktop } from "./Header/HeaderDesktop";
import { HeaderMobile } from "./Header/HeaderMobile";

export function ScreenSize() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return window.innerWidth > 1024 ? <HeaderDesktop /> : <HeaderMobile />;
}
