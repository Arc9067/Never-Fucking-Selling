import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-[30px] w-full bg-secondary">
      <div className="container flex justify-center items-center gap-6">
        <FaTelegramPlane className="text-primary" size={52} />
        <FaTwitter className="text-primary" size={52} />
        <MdMail className="text-primary" size={52} />
      </div>
    </footer>
  );
};

export default Footer;
