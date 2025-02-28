/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    title: "General Management",
    description:
      "We provide expert leadership and strategic oversight to ensure seamless operations and sustainable growth.",
  },
  {
    title: "Human Resources",
    description:
      "Attracting, developing, and retaining top talent is fundamental to a thriving hospitality business.",
  },
  {
    title: "Expert Management",
    description:
      "Our tailored consultancy connects businesses with top-tier hospitality professionals to optimize key areas of expertise.",
  },
  {
    title: "Facilities Management",
    description:
      "We ensure that your property is maintained at the highest standards, balancing efficiency, sustainability, and cost-effectiveness.",
  },
  {
    title: "Revenue Management",
    description:
      "Maximizing profitability requires a sophisticated approach to pricing and inventory control.",
  },
  {
    title: "Sales & Marketing",
    description:
      "A strong market presence is key to attracting guests and driving revenue by crafting compelling strategies.",
  },

  {
    title: "Hotel Operations",
    description:
      "From front-of-house to back-of-house, we streamline every aspect of hotel management to ensure exceptional guest experiences.",
  },
  {
    title: "Health & Safety",
    description:
      "Ensuring compliance with industry regulations and maintaining the highest safety standards is a priority.",
  },
  {
    title: "Interim Management",
    description:
      "When businesses require temporary leadership or specialized expertise, we provide a professional experience.",
  },
  {
    title: "Finance",
    description:
      "Robust financial planning is the backbone of a successful hospitality business.",
  },
];
const sections = [
  {
    title: "🏨 Hotels",
    description:
      "At *RZ Hospitality, we help hotels **maximize revenue and enhance guest experiences*. Our strategies focus on optimizing pricing, improving operational efficiency, and elevating customer service standards. We provide tailored staff training programs, boost brand visibility, and foster guest loyalty to ensure your hotel thrives in a competitive market.",
  },
  {
    title: "🍽 Restaurants",
    description:
      "For restaurants, we offer *strategic solutions to refine service and drive profitability*. We help design cost-effective, high-impact menus, optimize kitchen workflows, and improve service delivery. Our branding and marketing strategies increase your restaurant’s visibility, while cost control measures enhance profitability and sustainability.",
  },
  {
    title: "🍸 Bars",
    description:
      "At *RZ Hospitality, we work with bars to **create engaging, profitable nightlife experiences*. We help craft unique beverage programs, optimize bar operations for efficiency, and implement dynamic pricing strategies to increase revenue. Our services also include ensuring compliance with safety and licensing standards, creating memorable atmospheres that draw customers in. ",
  },
  {
    title: "☕ Coffeeshops",
    description:
      "For coffeeshops, we focus on *improving operational efficiency and building brand loyalty*. We streamline ordering processes, reduce wait times, and design inviting atmospheres that keep customers returning. Our team helps strengthen your brand identity, create specialty menu offerings, and implement eco-friendly practices to enhance both customer experience and profitability.",
  },
];
const Services = () => {
  const [activeSection, setActiveSection] = useState<any>("🏨 Hotels");

  return (
    <div id="our-services">
      <div className="w-full text-center flex items-center justify-center">
        <div>
          <h1 className="lg:text-7xl text-4xl text-second">Our Services</h1>
          <div className="flex items-center justify-center lg:mt-4 mt-2">
            <h1 className=" lg:text-lg text-sm px-4 text-center text-slate-400 lg:w-2/3">
              Leveraging years of expertise, we empower hotels, resorts,
              restaurants, and hospitality businesses to elevate their services
              and achieve lasting success.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-8 lg:mt-10 mt-4 relative">
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
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:px-16 lg:w-2/3 p-3">
          <div className="max-w-2xl mx-auto ">
            <h1 className="lg:text-2xl text-lg">
              Diverse Range of Hospitality Establishments with Tailored
              Strategies to Optimize Operations, and Maximize Success
            </h1>
          </div>
          <div className="max-w-2xl mx-auto mt-6">
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                {/* Section Title */}
                <h2
                  onClick={() =>
                    setActiveSection(
                      activeSection === section.title ? null : section.title
                    )
                  }
                  className={`lg:text-5xl text-3xl cursor-pointer transition-colors ${
                    activeSection === section.title
                      ? "text-second font-semibold"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {section.title}
                  {activeSection === section.title && (
                    <div className="w-full h-[2px] bg-second my-4"></div>
                  )}
                </h2>

                {/* Description (Only Show When Active) */}
                {activeSection === section.title && (
                  <div className="mt-2 p-4 ">
                    <p className="text-gray-700 dark:text-gray-300 lg:text-lg text-sm">
                      {section.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src="/images/items.png" alt="" className="lg:max-w-screen-sm " />
        </div>
      </div>
    </div>
  );
};

export default Services;
