"use client";
import React from "react";

const Footer = () => {
  return (
    <div className=" ">
        
      <div className="bg-gradient-to-t relative from-main2 to-main text-white lg:pt-16 lg:px-16 px-4 py-4 bg-cover lg:bg-end">
        
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex flex-col justify-center lg:items-start items-center">
            <img src="/images/logo.png" alt="" className="w-1/2 h-auto" />
          </div>
          <div className="flex flex-col gap-8 justify-center lg:items-start items-center">
            <div className="flex flex-row gap-8">
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#about-us");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About US
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#our-services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Services
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </h1>
            </div>
            <div className="flex flex-row gap-8">
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#Gallery");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                gallery
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#Testimonials");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Testimonials
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#FAQ");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                FAQ
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center lg:px-16 px-4">
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/facebook.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Follow us on Facebook</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/instagram.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Follow us on Instagram</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/linkedIn.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Follow us on LinkedIn</h1>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <h1 className="font-light">
            © 2025 RZ Hospitality. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
