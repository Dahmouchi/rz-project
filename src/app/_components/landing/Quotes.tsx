import React from "react";

const Quotes = () => {
  return (
    <div className="lg:py-8 lg:px-8 py-4 px-4">
      <div
        className="bg-main lg:rounded-3xl rounded-xl lg:py-8 lg:px-8 px-4 py-4 bg-cover lg:bg-center"
        style={{
          backgroundImage: 'url("/images/Lines.png")',
        }}
      >
        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <img
            src="/images/quote.png"
            alt=""
            className="lg:w-1/3 md:w-1/2 h-auto rounded-xl"
          />
          <div className="flex flex-col gap-4 lg:px-32 md:px-10">
            <h1 className="lg:text-7xl text-second text-4xl ">Rz Hospitality</h1>
            <h1 className="text-slate-100 lg:text-xl text-md">
              ”Founded in 2023 By Ryda Zarhouni, we are dedicated to empowering
              hospitality business owners in need of expert guidance in areas
              such commercial strategy, operational management Recruitement, and
              strategic planning.”
            </h1>
            <h1 className="text-right lg:text-2xl text-xl text-slate-50">- Ryda ZARHOUNI</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
