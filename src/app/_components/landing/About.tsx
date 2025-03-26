import React from "react";

const About = () => {
  return (
    <div className="lg:py-8 py-4 " id="about-us">
      <div className="bg-gradient-to-r relative from-main2 via-main to-main2  text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center">
        

        <div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg"> About us</h1>
          </div>

          <div className="w-full h-[2px] bg-white lg:my-4 my-2"></div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-start lg:justify-between pb-6 lg:text-left text-center">
          <div className="flex flex-col lg:gap-8 gap-6 lg:w-1/2 lg:text-lg text-sm ">
            <h1 className="text-second lg:text-5xl text-3xl">
              <span className="bg-gradient-to-r from-main3 to-gray-500 inline-block text-transparent bg-clip-text mr-2">
                At{" "}
              </span>
              <span className="bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text">
                {" "}
                RZ Hospitality,
              </span>{" "}
            </h1>
            <h1>
            At RZ Hospitality, we are more than consultants—we are hands-on strategists dedicated to transforming hospitality businesses. From luxury hotels to cozy cafés, we craft tailored solutions that enhance guest experiences, optimize operations, and drive profitability.


            </h1>

            <h1 className="whitespace-pre-line">
            With expertise spanning sales & marketing, F&B operations, hotel management, finance, and interim leadership, we work closely with our clients to implement scalable, results-driven strategies. Whether refining service excellence, modernizing facilities, or maximizing revenue, we ensure every establishment operates at its full potential.

            </h1>
            
            <span className="font-bold mr-2">Passion. Precision. Performance. That&apos;s the RZ Hospitality difference
            </span>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
