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
            <h1 className="lg:text-5xl text-second text-4xl ">
              Welcome to Rz Hospitality{" "}
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
