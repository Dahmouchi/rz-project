import React from "react";

const Quotes = () => {
  return (
    <div className=" ">
      <div
        className="bg-gradient-to-r relative from-main2 via-main to-main2   lg:py-8 lg:px-8 px-4 py-4 bg-cover lg:bg-center"
       
      >
        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <img
            src="/images/quote.png"
            alt=""
            className="lg:w-1/3 md:w-1/2 h-auto rounded-xl"
          />
          <div className="flex flex-col gap-4 lg:px-32 md:px-10">
            <h1 className="lg:text-5xl text-second text-4xl ">

              <span className="bg-gradient-to-r from-main3 to-gray-500 inline-block text-transparent bg-clip-text mr-2">Welcome to </span><span className="bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text"> Rz Hospitality</span>{" "}
            </h1>
            <h1 className="text-slate-100 lg:text-xl text-md">
              ”Founded in 2023 by Ryda Zarhouni, Rz Hospitality is your trusted
              partner for elevating your business in the hospitality industry.
              We specialize in delivering expert support in{" "}
              <span className="font-bold">
                Interim Management, Recruitment, Commercial Strategy, and
                Operational Management.
              </span>
            </h1>
            <h1 className="text-slate-100 lg:text-xl text-md">
              Whether you need to optimize your operations, build a top-tier
              team, or develop a winning business plan, we&apos;re here to guide
              you every step of the way. Our goal is to help you create
              exceptional experiences while driving growth and success.
            </h1>
            <h1 className="text-slate-100 lg:text-xl text-md">
              Ready to transform your hospitality business? Let&apos;s make it
              happen together!  ”
            </h1>
            <h1 className="text-right lg:text-2xl text-xl text-slate-50">
              - Ryda ZARHOUNI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
