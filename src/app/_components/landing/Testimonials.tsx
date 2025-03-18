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
    name: "A. Benhaddou",
    job: "General Manager, Luxury Boutique Hotel",
    image: "/images/profile1.jpg",
  },
  {
    id: 2,
    text: "From leadership training to operational restructuring, RZ Hospitality provided us with the expertise we needed to elevate our services.",
    name: "S. El Mansouri",
    job: "Director of Operations, 5-Star Resort",
    image: "/images/profile2.jpg",
  },
  {
    id: 3,
    text: "The recruitment strategy designed by RZ Hospitality allowed us to build a high-performing team that truly reflects our brand values.",
    name: "M. Tazi",
    job: "HR Director, International Hotel Group",
    image: "/images/profile3.jpg",
  },
  {
    id: 4,
    text: "RZ Hospitality helped us streamline our customer experience and enhance our service quality, leading to a significant increase in client satisfaction.",
    name: "L. Rahmani",
    job: "Guest Relations Manager, Luxury Resort",
    image: "/images/profile4.jpg",
  },
  {
    id: 5,
    text: "With RZ Hospitality’s expertise in revenue management, we were able to maximize our profits while maintaining exceptional service.",
    name: "F. Idrissi",
    job: "CFO, Exclusive Hotels & Resorts",
    image: "/images/profile5.jpg",
  },
  {
    id: 6,
    text: "Their strategic approach to digital transformation revolutionized the way we engage with guests, boosting our online presence and direct bookings.",
    name: "N. Chafik",
    job: "Marketing Director, Global Hospitality Group",
    image: "/images/profile6.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="lg:py-8 lg:px-8 py-4 px-2" id="Testimonials">
      <div
        className="bg-main lg:rounded-3xl rounded-xl text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center"
        style={{
          backgroundImage: 'url("/images/Lines.png")',
        }}
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
                  <div className="bg-gradient-to-b from-[#bfb2a9] to-[#737861] rounded-lg p-4 pt-8">
                    <div className="flex flex-col aspect-square  gap-4 text-white justify-between">
                      <h1 className="text-lg">{service.text}</h1>
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{backgroundImage:`url(${service.image})`}}></div>
                        <div>
                        <h1 className="line-clamp-1 text-black text-lg font-semibold">{service.name}</h1>
                        <h1 className="text-xs text-slate-100">{service.job}</h1>
                        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
