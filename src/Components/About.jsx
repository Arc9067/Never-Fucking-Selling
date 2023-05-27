import React from "react";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-secondary">
      <div className="container flex flex-col text-center text-white gap-8">
        <h1 className="text-5xl md:text-6xl font-Pokemon tracking-widest">
          about us!
        </h1>
        <p className="text-2xl tracking-widest">
          Welcome to the whimsical realm of 'Never F**king Seling' (NFS), where
          we throw financial sanity out the window and embrace a warm, fuzzy
          blanket of sheer lunacy.
        </p>
        <p className="text-2xl tracking-widest">
          As the merry misfits of the crypto universe, we're here to redefine
          what it means to be 'normal' in the world of investments. Buckle up,
          because things are about to get delightfully absurd.
        </p>
      </div>
    </section>
  );
};

export default About;
