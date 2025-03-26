"use client"
import React from "react";

const Join = () => {
  return (
    <div className="py-8" >
      <div className="w-full text-center flex items-center justify-center">
        <div>
          <h1 className="lg:text-7xl text-3xl">
            Elevating Hospitality Excellence: Our Commitment to Your Success
          </h1>
          <div className="flex items-center justify-center">
          <div
           onClick={() => {
            const section = document.querySelector("#contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
           className="bg-gradient-to-r cursor-pointer from-text2 via-text to-text2 text-xl my-8 font-semibold text-white  px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Join;
