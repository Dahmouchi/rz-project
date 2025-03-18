import React from "react";

const Join = () => {
  return (
    <div className="py-8" style={{ backgroundImage: 'url("/images/bg3.png")' }}>
      <div className="w-full text-center flex items-center justify-center">
        <div>
          <h1 className="lg:text-7xl text-3xl">
            Elevating Hospitality Excellence: Our Commitment to Your Success
          </h1>
          <button className="bg-gradient-to-b text-xl my-8 font-semibold from-amber-400 to-yellow-600 px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </button>
        </div>
      </div>
      <div className=" w-full flex items-center lg:justify-end justify-center lg:p-0 p-2">
        <div className="bg-main w-full lg:w-3/4 lg:h-[400px] lg:rounded-l-full rounded-t-full lg:rounded-tr-none flex lg:flex-row flex-col">
          <img src="/images/circle2.png" alt="" className="h-full w-auto" />
          <div className="w-full py-4 flex flex-col lg:items-end items-center gap-8 px-8 text-center">
            <div>
            <h1 className="lg:text-right text-center text-4xl lg:text-7xl text-white">Join</h1>
            <h1 className="lg:text-right text-center text-4xl lg:text-7xl text-white"> RZ Management</h1>
            </div>
            
            <h1 className="text-slate-200 text-lg ">At RZ Hospitality, we are more than just consultants—we are your strategic partner</h1>
            <button className="bg-gradient-to-b text-xl my-8 font-semibold from-amber-400 to-yellow-600  px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Join;
