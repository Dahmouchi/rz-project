"use client"
import React from "react";

const Join = () => {
  return (
    <div className="py-8" style={{ backgroundImage: 'url("/images/bg3.png")' }}>
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
      <div className=" w-full flex items-center lg:justify-end justify-center lg:p-0 p-2">
        <div className="bg-gradient-to-r relative from-main2 via-main to-main2 w-full lg:w-3/4 lg:h-[400px] lg:rounded-l-full rounded-t-full lg:rounded-tr-none flex lg:flex-row flex-col">
          <img src="/images/circle2.png" alt="" className="h-full w-auto" />
          <div className="w-full py-4 flex flex-col lg:items-end items-center gap-8 px-8 text-center">
            <div>
              
            <h1 className="lg:text-right text-center text-4xl lg:text-7xl text-main3">
              Join</h1>
            <h1 className="lg:text-right text-center text-4xl lg:text-7xl text-white"> 
   <span className="bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text"> RZ Management</span>{" "}

             </h1>
            </div>
            
            <h1 className="text-slate-200 text-lg ">At RZ Hospitality, we are more than just consultants—we are your strategic partner</h1>
            <div
             onClick={() => {
              const section = document.querySelector("#contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-text2 via-text to-text2 text-white text-xl my-8 font-semibold  px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Join;
