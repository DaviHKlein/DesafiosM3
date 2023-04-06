import { Router } from "./router";
import { Navegation } from "./components/Navegation";

import { ScreenSize } from "./components/DetectSize";

import { HeaderDesktop } from "./components/Header/HeaderDesktop";
import { HeaderMobile } from "./components/Header/HeaderMobile";
import { TopContainer } from "./components/Container-menu/TopContainer";
import { MainFooter } from "./components/Footer/FooterMain";

import "./App.scss";

export const App = () => {
  return (
    ScreenSize(),
    (
      <>
        {window.innerWidth > 1024 ? <HeaderDesktop /> : <HeaderMobile />}
        <section className="Container-menu">
          <div className="TopContainer_wrapper">
            <TopContainer />
          </div>
          <div className="MainConteiner">
            <Navegation />
            <Router />
          </div>
          <MainFooter />
        </section>
      </>
    )
  );
};
