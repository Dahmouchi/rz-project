"use client";

import * as React from "react";

export function Hero() {
  return (
    <div className="w-full lg:min-h-screen ">
      <div className="lg:p-8 p-2">
        <div
          className="bg-red-800 relative w-full bg-cover bg-center rounded-2xl lg:min-h-[70vh] py-10 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/hero.jpg")',
          }}
        >
          <div className="bg-yellow-800/40 absolute w-full h-full rounded-2xl "></div>
          <div className="lg:w-1/2 z-10 px-4">
            <h1 className="lg:text-7xl font-semibold text-4xl text-center text-white ">
              Empowering Hospitality Success
            </h1>
            <h1 className="lg:text-lg text-sm text-center text-slate-200 mt-2">
              With over a decade of experience in the industry, we help hotels,
              resorts, restaurants, and hospitality service providers unlock
              their full potential through
            </h1>
            <div className="flex gap-2 items-center justify-center mt-2">
              <button className="bg-gradient-to-b font-semibold from-amber-400 to-yellow-600  px-4 py-2 rounded-full text-slate-100">
                <div>SEE OUR SERVICES</div>
              </button>
              <button className="border-2 text-white font-semibold px-6 py-2 rounded-full border-white">
                <div>Get in touch</div>
              </button>
            </div>
          </div>

          <div className="w-2/3 h-20 bg-white hidden lg:block absolute bottom-0 right-0 dark:bg-dark rounded-tl-full clip-path-custom">
            <div className="flex items-center justify-center w-full gap-4 h-full">
              <div className="w-1/2 h-full flex items-center justify-between mt-6">
                <div className="">
                  <h1 className="text-second text-3xl font-semibold">16+</h1>
                  <h1 className="text-md">Hotels served</h1>
                </div>
                <div className="">
                  <h1 className="text-second text-3xl font-semibold">5+</h1>
                  <h1 className="text-md">Restaurants </h1>
                </div>
                <div className="">
                  <h1 className="text-second text-3xl font-semibold">6+</h1>
                  <h1 className="text-md">Clubs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden py-4">
          <div className="flex items-center justify-center w-full gap-4 h-full">
            <div className="w-full px-4 py-2 h-full flex items-center justify-between">
              <div className="">
                <h1 className="text-second text-3xl font-semibold">16+</h1>
                <h1 className="text-md">Hotels served</h1>
              </div>
              <div className="">
                <h1 className="text-second text-3xl font-semibold">5+</h1>
                <h1 className="text-md">Restaurants </h1>
              </div>
              <div className="">
                <h1 className="text-second text-3xl font-semibold">6+</h1>
                <h1 className="text-md">Clubs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[30vh] lg:flex-row flex-col py-4 bg-white dark:bg-main border-y-[1px] border-slate-200 dark:border-slate-500 flex items-center justify-between lg:px-44">
        <div>
          <h1 className="lg:text-lg text-md">Global partners that trusted us</h1>
        </div>
        <div className="flex items-center justify-between lg:gap-16 gap-6 py-6">
          <img src="/icons/icon1.png" alt="" className="lg:w-24 w-16 h-auto"/>
          <img src="/icons/icon2.png" alt="" className="lg:w-24 w-16 h-auto"/>
          <img src="/icons/icon4.png" alt="" className="lg:w-24 w-16 h-auto"/>
          <img src="/icons/icon5.png" alt="" className="lg:w-24 w-16 h-auto"/>
        </div>
      </div>
    </div>
  );
}
