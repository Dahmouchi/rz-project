"use client";
import React from "react";

const services = [
    {
      title: "Sales & Marketing",
      description: "Boost visibility and bookings with data-driven strategies and compelling brand positioning",
    },
    {
      title: "Facilities Management",
      description: "Ensure seamless operations with efficient maintenance, sustainability solutions, and cost control",
    },
    {
      title: "Coffee Specialty",
      description: "Elevate your coffee experience with expert sourcing, barista training, and menu development",
    },
    {
      title: "General Management",
      description: "Comprehensive leadership to enhance efficiency, guest satisfaction, and profitability",
    },
    {
      title: "F&B Operations",
      description: "Optimize restaurant and bar performance with strategic menu design, service excellence, and cost management",
    },
    {
      title: "Finance",
      description: "Maximize revenue and control expenses with tailored financial planning and budgeting solutions",
    },
    {
      title: "Interim Management",
      description: "Swift, expert leadership support during transitions or crises to maintain operational stability",
    },
    {
      title: "Health & Safety",
      description: "Implement top-tier protocols to ensure compliance, guest well-being, and staff security",
    },
    {
      title: "Hotel Operations",
      description: "End-to-end operational excellence, from front desk to housekeeping, for a flawless guest experience",
    },
  ];

const sections = [
  {
    title: "Hotels",
    description: "Maximize occupancy, streamline operations, and enhance guest satisfaction with strategic revenue management and seamless service execution",
  },
  {
    title: "Restaurants",
    description: "Craft unforgettable dining experiences through menu engineering, staff training, and operational efficiency",
  },
  {
    title: "Bars",
    description: "Elevate ambiance, boost profitability, and refine mixology programs with expert bar management strategies",
  },
  {
    title: "Coffeeshops & Brunch",
    description: "Perfect your coffee culture, optimize workflows, and create inviting spaces that keep guests coming back",
  }
  ,
];
const Services = () => {

  return (
    <div >
      <div className="w-full text-center flex items-center justify-center mt-8">
        <div>
          <h1 className="lg:text-7xl text-4xl bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text">
            Our Services
          </h1>
          <div className="flex items-center justify-center lg:mt-4 mt-2">
            <h1 className=" lg:text-lg text-sm px-4 text-center text-slate-400 dark:text-gray-300 ">
            Our Expertise in Hospitality Excellence

            </h1>
          </div>
        </div>
      </div>
      
      <div className="py-4 lg:px-10 px-3 lg:mt-10 mt-4 relative grid grid-cols-1 lg:grid-cols-3 gap-3">
       {services.map((service,index)=>(
        <div className="bgblue" key={index}>
          <div className="card text-center">
          <h1 className="text-3xl mb-3">{service.title}</h1>
          <h1 className="line-clamp-4">{service.description}</h1>
          </div>
          </div>
       ))}
          
                
             
        {/*
         <div className="lg:w-32 w-10 h-full bg-gradient-to-r from-transparent to-white dark:to-dark absolute right-0 z-10"></div>
          <div className="lg:w-32 w-10 h-full bg-gradient-to-l absolute from-transparent to-white dark:to-dark  left-0 z-10"></div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <div className="lg:w-32 w-10 h-full bg-gradient-to-r from-transparent to-white dark:to-dark absolute right-0 z-10"></div>
          <div className="lg:w-32 w-10 h-full bg-gradient-to-l absolute from-transparent to-white dark:to-dark  left-0 z-10"></div>
          <CarouselContent className="relative">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 flex items-center justify-center"
              >
                <div className="p-4 w-full flex items-center justify-center">
                  <div className="bg-gradient-to-b from-amber-400 to-yellow-600 rounded-lg p-4 pt-8">
                    <div className="flex flex-col aspect-square  p-6 gap-4 text-white">
                      <h1 className="text-4xl">{service.title}</h1>
                      <div className="w-full h-[2px] my-4 bg-white rounded-full"></div>
                      <div>
                        <h1 className="line-clamp-4">{service.description}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full flex items-center justify-between px-10 mt-8 ">
            <CarouselPrevious className="bg-second z-10" />
            <CarouselNext className="bg-second z-10" />
          </div>
        </Carousel>
        

        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className=" flex items-center justify-center"
              >
                <div className="w-full grid gap-4 lg:grid-cols-8 grid-cols-1">
                  <div className="bg-gradient-to-b from-amber-400 to-yellow-600 rounded-lg p-4  lg:col-span-2  lg:h-1/2">
                    <h1 className="lg:text-4xl text-xl">{service.title}</h1>
                    <div className="w-full h-[2px] my-4 bg-white rounded-full"></div>
                    <div>
                      <h1 className="line-clamp-4">{service.description}</h1>
                    </div>
                  </div>
                    <div>
                      
                    </div>
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full flex items-center justify-between px-10 mt-8 ">
            <CarouselPrevious className="bg-second z-10" />
            <CarouselNext className="bg-second z-10" />
          </div>
        </Carousel>*/}
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:px-16 lg:w-full p-3">
          <div className="w-full mx-auto py-8">
            <h1 className="lg:text-3xl text-lg text-center font-bold text-main dark:text-white">
             Who we serve : Tailored Expertise for Every Hospitality Business
            </h1>
          </div>
          <div className="mx-auto mt-6 lg:grid grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-6 relative border-4 border-main rounded-xl p-4 text-center shadow-lg">
                {/* Section Title */}
                <h2
                 
                  className="lg:text-5xl text-3xl cursor-pointer transition-colors 
                   bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text font-semibold "
                >
                  {section.title}
                    <div className="w-full h-[2px] bg-second my-4"></div>
                  
                </h2>

                {/* Description (Only Show When Active) */}
                  <div className=" p-4 ">
                    <p className="text-gray-700 dark:text-gray-300 lg:text-lg text-sm line-clamp-5">
                      {section.description}
                    </p>
                    
                  </div>
              </div>
            ))}
          </div>
        
        {/*
        <div>
          <img src="/images/items.png" alt="" className="lg:max-w-screen-sm " />
        </div>
        */}</div>
      </div>
    </div>
  );
};

export default Services;
