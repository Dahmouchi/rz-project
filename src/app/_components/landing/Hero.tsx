"use client";

import * as React from "react";

export function Hero() {
  return (
    <div className="w-full lg:min-h-screen lg:pt-24 pt-20">
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
              <div
                className="cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#our-services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <div className="bg-gradient-to-r  font-semibold from-text2 via-text to-text2  px-4 py-2 rounded-full text-slate-100">
                  <div>SEE OUR SERVICES</div>
                </div>
              </div>
              <div
                onClick={() => {
                  const section = document.querySelector("#contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 cursor-pointer text-white font-semibold px-6 py-2 rounded-full border-white"
              >
                <div>Get in touch</div>
              </div>
            </div>
          </div>

         
        </div>
        <div className="lg:hidden py-4">
          <div className="flex items-center justify-center w-full gap-4 h-full">
            <div className="w-full px-4 py-2 h-full flex items-center justify-between">
              <div className="">
                <h1 className="text-text2 text-3xl font-semibold">16+</h1>
                <h1 className="text-md">Hotels served</h1>
              </div>
              <div className="">
                <h1 className="text-text2 text-3xl font-semibold">5+</h1>
                <h1 className="text-md">Restaurants </h1>
              </div>
              <div className="">
                <h1 className="text-text2 text-3xl font-semibold">6+</h1>
                <h1 className="text-md">Clubs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
