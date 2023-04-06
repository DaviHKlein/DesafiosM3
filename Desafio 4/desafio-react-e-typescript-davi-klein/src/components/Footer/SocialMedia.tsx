import Facebook from "../assets/imgs/SVGs/Facebook.svg";
import Instagram from "../assets/imgs/SVGs/Instagram.svg";
import Twitter from "../assets/imgs/SVGs/Twitter.svg";
import YouTube from "../assets/imgs/SVGs/YouTube.svg";
import Linkedin from "../assets/imgs/SVGs/Linkedin.svg";

import { WppIcon } from "./wpp";

export const SocialMedia = () => {
  return (
    <>
      <div className="SocialMedia">
        <div className="Img_wrappers">
          <img src={Facebook} alt="Facebook-logo" />
          <img src={Instagram} alt="Instagram-logo" />
          <img src={Twitter} alt="Twitter-logo" />
          <img src={YouTube} alt="YouTube-logo" />
          <img src={Linkedin} alt="Linkedin-logo" />
        </div>
        <span className="Site"> www.loremipsum.com </span>
        <WppIcon />
        {/* <div>{window.innerWidth > 1024 ? <WppIcon /> : ""}</div> */}
      </div>
    </>
  );
};
