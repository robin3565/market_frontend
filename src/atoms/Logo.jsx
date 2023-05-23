import React from "react";
import { HOME_PATH } from "../config/config_home";

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      {/* <img
        src={`${HOME_PATH}/img/market.png`}
        className="h-8 mr-3"
        alt="Logo"
      /> */}
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white title_a">
        시장275
      </span>
    </a>
  );
};

export default Logo;
