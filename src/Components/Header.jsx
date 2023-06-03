import React from "react";
import Logo from "../assets/headerlogo.png";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { TiChartLine } from "react-icons/ti";

const Header = () => {
  return (
    <header className="py-5 w-full absolute top-0 bg-secondary">
      <div className="container flex justify-between items-center">
        <a
          href=""
          className="text-3xl font-Pokemon text-primary capitalize tracking-wide out-txt"
        >
          never fucking selling
        </a>
        <div className="hidden lg:flex gap-5">
          <a
            href="https://t.me/NeverFuckingSellingportal"
            className="flex items-center text-3xl gap-3"
          >
            <TbBrandTelegram className="text-white" />
            telegram
          </a>
          <a
            href="https://twitter.com/NeverFuckingSel"
            className="-rotate-2 flex items-center text-3xl gap-3"
          >
            <BsTwitter className="text-white" />
            twitter
          </a>
          <a href="" className="flex items-center outlinet  text-3xl gap-3">
            <TiChartLine className="text-white" />
            dextools
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
