"use client"
import React from "react";

const Footer = () => {
  return (
    <div className=" ">
      <div className="bg-main w-full lg:w-3/4 lg:h-[400px] lg:rounded-r-full rounded-t-full lg:rounded-tl-none  flex lg:flex-row flex-col-reverse">
        <div className="w-full py-4 flex flex-col lg:items-start items-center gap-4 px-8 text-center justify-center">
          <div>
            <h1 className="lg:text-left text-center text-3xl lg:text-6xl text-white">
              Unlock the Future of{" "}
            </h1>
            <h1 className="lg:text-left text-center text-3xl lg:text-6xl text-white">
              Hospitality Excellence
            </h1>
          </div>

          <h1 className="text-slate-200 text-md font-light">
            Join a community of hospitality leaders committed to excellence and
            transformation.
          </h1>
          <h1 className="text-slate-200 text-md font-light ">
            Subscribe today and let&apos;s shape the future of
            hospitality together
          </h1>
          <div className="flex gap-2 items-center lg:flex-row flex-col  w-full">
            <input
              type="text"
              placeholder="Your e-mail..."
              className=" bg-white rounded-full px-8 py-2 w-full"
            />
            <button className="bg-gradient-to-b text-xl font-semibold from-amber-400 to-yellow-600 px-8 py-2 rounded-full ">
              <div>Get in touch</div>
            </button>
          </div>
        </div>
        <img src="/images/circle2.png" alt="" className="h-full w-auto" />
      </div>
      <div
        className="bg-main text-white lg:pt-16 lg:px-16 px-4 py-4 bg-cover lg:bg-end"
        style={{
          backgroundImage: 'url("/images/Lines.png")',
        }}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col justify-center lg:items-start items-center">
                <img src="/images/logo.png" alt="" className="w-1/2 h-auto" />
            </div>
            <div className="flex flex-col gap-8 justify-center lg:items-start items-center">
                <div className="flex flex-row gap-8">
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#about-us");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >About US</h1>
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#our-services");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >Our Services</h1>
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >Contact</h1>
                </div>
                <div className="flex flex-row gap-8">
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#Gallery");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >gallery</h1>
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#Testimonials");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >Testimonials</h1>
                    <h1 className="text-white text-lg font-light cursor-pointer"
                    onClick={() => {
                      const section = document.querySelector("#FAQ");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    >FAQ</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center lg:px-16 px-4">
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
                <img src="/icons/facebook.png" alt="" className="w-16 h-16"/>
                <h1 className="text-white text-xl">Follow us on Facebook</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
                <img src="/icons/instagram.png" alt="" className="w-16 h-16"/>
                <h1 className="text-white text-xl">Follow us on Instagram</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
                <img src="/icons/linkedIn.png" alt="" className="w-16 h-16"/>
                <h1 className="text-white text-xl">Follow us on LinkedIn</h1>
            </div>
        </div>
        </div>
        <div className="w-full text-center mt-8">
        <h1 className="font-light">© 2025 RZ Hospitality. All rights reserved.</h1>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
