import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-black py-[50px] text-white">
      <div className="container text-center">
        <h1 className="text-5xl text-primary md:text-6xl font-Pokemon tracking-widest">
          tokenomics!
        </h1>

        <div className="flex flex-col gap-5 mt-10">
          <p className="text-3xl md:text-4xl">
            name: <span>never fucking selling</span>
          </p>
          <p className="text-3xl md:text-4xl">
            ticker: <span>#NFS</span>
          </p>
          <p className="text-3xl md:text-4xl">
            ca:{" "}
            <span className=" block md:inline">
              0x3ae080bcb4b2ba9b984112aa14954be202dcb5ee
            </span>
          </p>
          <p className="text-3xl md:text-4xl">
            total supply: <span>1,000,000</span>
          </p>
          <p className="text-3xl md:text-4xl">
            tax: <span>0%</span>
          </p>
          <p className="text-3xl md:text-4xl">
            slippage: <span>1%-4%</span>
          </p>
          <p className="text-3xl md:text-4xl">
            Liquidity: <span className="text-secondary">burned</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
