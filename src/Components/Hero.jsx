import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-[100px] w-full">
      <div className="container grid gap-10 lg:grid-cols-2 items-center justify-between">
        <div className="flex text-center md:text-left flex-col order-2 md:order-1 gap-20 lg:gap-4">
          <h1 className="text-5xl md:text-7xl text-secondary">
            HODL On, We're Going to the Moon!
          </h1>
          <div className="flex flex-col md:flex-row gap-5 b-red-500">
            <a
              href="https://www.dextools.io/app/ether/pair-explorer/0xe15ab02d92b960Cb77E7b9F7bA36b3EA46fdE2bA"
              className="text-3xl px-5 py-3 bg-secondary text-white"
            >
              buy now
            </a>
            <a
              href="https://www.dextools.io/app/ether/pair-explorer/0xe15ab02d92b960Cb77E7b9F7bA36b3EA46fdE2bA"
              className="text-3xl px-5 py-3 bg-third text-white"
            >
              view chart
            </a>
            <a
              href="https://mobile.twitter.com/NeverFkingSell"
              className="block lg:hidden text-3xl px-5 py-3 bg-black text-white"
            >
              twitter
            </a>
            <a
              href="https://t.me/NeverfuckingSelling"
              className="block lg:hidden text-3xl px-5 py-3 bg-forth text-white"
            >
              telegram
            </a>
            <a
              href="mailto:Marketing@teamketchup.site"
              className="block lg:hidden text-3xl px-5 py-3 bg-secondary text-white"
            >
              email
            </a>
          </div>
        </div>
        <img src={Logo} alt="" className="md:order-2 md:w-10/12" />
      </div>
    </section>
  );
};

export default Hero;
