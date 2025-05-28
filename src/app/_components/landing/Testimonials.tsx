"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const testimonials = [
  {
    id: 1,
    text: "RZ Hospitality transformed the way we operate. Their strategic insights and hands-on approach helped us optimize our revenue.",
    name: "Chet",
    job: "Hopper and bean",
    image: "/images/profile-picture.png",
  },
  {
    id: 2,
    text: "From leadership training to operational restructuring, RZ Hospitality provided us with the expertise we needed to elevate our services.",
    name: "Saleem ",
    job: "The taco house",
    image: "/images/profile-picture.png",
  },
  {
    id: 3,
    text: "The recruitment strategy designed by RZ Hospitality allowed us to build a high-performing team that truly reflects our brand values.",
    name: "Hugo ",
    job: "Perk cafe",
    image: "/images/profile-picture.png",
  },
  {
    id: 4,
    text: "RZ Hospitality helped us streamline our customer experience and enhance our service quality, leading to a significant increase in client satisfaction.",
    name: "Mohammed ",
    job: "Cafe Lavista",
    image: "/images/profile-picture.png",
  },
  {
    id: 5,
    text: "With RZ Hospitality’s expertise in revenue management, we were able to maximize our profits while maintaining exceptional service.",
    name: "Cyrus",
    job: "House waves",
    image: "/images/profile-picture.png",
  },
  {
    id: 6,
    text: "Their strategic approach to digital transformation revolutionized the way we engage with guests, boosting our online presence and direct bookings.",
    name: "Shadi",
    job: "Nika & store",
    image: "/images/profile-picture.png",
  },
];

const Testimonials = () => {
  return (
    <div className="lg:py-8 py-4" id="Testimonials">
      <div
        className="bg-gradient-to-r relative from-main2 via-main to-main2  text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center"
       
      >

        <div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg">Testimonials</h1>
        </div>
        
          <div className="w-full h-[2px] bg-white lg:my-4 my-2"></div>
        </div>

        <div>
          <h1 className="lg:text-6xl text-4xl text-white mt-4">
            What our customers say
          </h1>
        </div>
        <div>
        <div className="py-8 mt-4 relative">
        <Carousel 
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="relative">
            {testimonials.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 flex items-center justify-center"
              >
                <div className="p-4 w-full flex items-center justify-center">
                  <div className="bg-gradient-to-b from-text to-text2 rounded-lg p-4 pt-8">
                    <div className="flex flex-col aspect-square  gap-4 text-white justify-between">
                      <h1 className="text-lg">{service.text}</h1>
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{backgroundImage:`url(${service.image})`}}></div>
                        <div>
                        <h1 className="line-clamp-1 text-black text-xl font-semibold">{service.name}</h1>
                        <h1 className="text-md text-slate-100">{service.job}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full flex items-center justify-between px-10 mt-8 ">
            <CarouselPrevious className="bg-text2 z-10" />
            <CarouselNext className="bg-text2 z-10" />
          </div>
        </Carousel>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
