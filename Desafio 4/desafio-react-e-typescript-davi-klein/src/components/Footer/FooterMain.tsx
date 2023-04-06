import { Newsletter } from "./Newsletter";
import { Contact } from "./ContactFooter";
import { SocialMedia } from "./SocialMedia";
import { BottomFooter } from "./BottomFooter";

import "./FooterMain.modules.scss";

export const MainFooter = () => {
  return (
    <>
      <section className="Footer_container">
        <Newsletter />
        <div className="Footer_top">
          <Contact />
          <SocialMedia />
        </div>
        <BottomFooter />
      </section>
    </>
  );
};
