import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-[30px] w-full bg-secondary">
      <div className="container flex justify-center items-center gap-6">
        <a href="https://mobile.twitter.com/NeverFkingSell">
          <FaTwitter className="text-primary" size={52} />
        </a>
        <a href="https://t.me/NeverfuckingSelling">
          <FaTelegramPlane className="text-primary" size={52} />
        </a>
        <a href="mailto:Yugifouga@gmail.com">
          <MdMail className="text-primary" size={52} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
