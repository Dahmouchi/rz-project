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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    title: "General Management",
    description:
      "At RZ Hospitality, we bring years of hands-on experience and proven expertise to the table. Our team of seasoned professionals specializes in providing expert leadership and strategic oversight to ensure your operations run seamlessly and your business achieves sustainable growth.\n\nWith a deep understanding of the hospitality industry, we’ve successfully managed diverse operations, from optimizing day-to-day workflows to implementing long-term growth strategies. Whether you’re navigating a transition, scaling your business, or refining your operational processes, we tailor our approach to meet your unique needs.\n\nLet us help you turn challenges into opportunities and drive your business toward lasting success.\n\n- Expert Leadership: Proven track record in guiding teams and operations to excellence.\n- Strategic Oversight: Customized strategies to align with your business goals.\n- Sustainable Growth: Focused on creating long-term value and profitability.",
  },

  {
    title: "Coffee Specialty",
    description:
      "At RZ Hospitality, we understand that coffee is more than just a beverage—it’s an experience. Our specialty coffee services are designed to elevate your offerings, whether you run a café, restaurant, or hotel. We bring expertise in sourcing, brewing, and presenting the finest coffee to delight your guests and keep them coming back for more.\n\nHere’s what we offer:\n\n- Premium Sourcing: We partner with top-quality coffee bean suppliers to ensure your coffee is always fresh, flavorful, and ethically sourced.\n- Expert Brewing: From espresso to pour-over, we train your staff in the art of brewing to perfection, ensuring every cup meets the highest standards.\n- Menu Development: We help you create a coffee menu that stands out, featuring signature drinks, seasonal specials, and unique blends.\n- Guest Experience: We design coffee stations and service setups that enhance the overall ambiance and create memorable moments for your guests.\n\nWhether you’re looking to launch a coffee program or refine your existing one, we’re here to help you brew success.\n\nReady to elevate your coffee game? Let’s craft an unforgettable coffee experience together!",
  },

  {
    title: "Facilities Management",
    description:
      "We take pride in ensuring your property is maintained to the highest standards, striking the perfect balance between efficiency, sustainability, and cost-effectiveness. Our experienced team brings a wealth of knowledge in managing diverse facilities, from routine maintenance to implementing eco-friendly solutions that reduce operational costs.\n\nWe understand that a well-maintained property is crucial to delivering exceptional guest experiences and maintaining your brand.",
  },

  {
    title: "Sales & Marketing",
    description:
      "We understand that a strong market presence is essential for attracting the right guests and driving revenue. Our team specializes in crafting compelling sales and marketing strategies that resonate with your target audience and boost your bottom line.\n\nWe focus on commercial awareness, tailoring our approach to align with the unique personalities and preferences of your guests. Whether it’s business travelers seeking convenience, families looking for memorable experiences, or luxury seekers craving exclusivity, we create campaigns that speak directly to their needs.\n\n- Guest-Centric Strategies: Personalized marketing to connect with different guest personas.\n- Revenue-Driven Sales: Tactics to maximize bookings and upsell opportunities.\n- Market Insights: Data-driven decisions to stay ahead of trends and competitors.\n\nLet us help you build a powerful brand presence that not only attracts guests but also turns them into loyal advocates.",
  },

  {
    title: "Hotel Operations",
    description:
      "At RZ Hospitality, we take full responsibility for managing every aspect of your hotel operations, ensuring a seamless and exceptional guest experience. From front-of-house to back-of-house, our team of experts handles it all, so you can focus on delivering outstanding hospitality.\n\nHere’s how we streamline your operations:\n\n- Front-of-House: We manage guest services, reception, concierge, and reservations to ensure a warm welcome and smooth check-in/check-out process.\n- Housekeeping: We oversee room cleanliness, maintenance, and laundry services, maintaining the highest standards of comfort and hygiene.\n- Food & Beverage: From restaurant operations to bar management, we ensure quality service, menu optimization, and efficient inventory control.\n- Back-of-House: We handle staff scheduling, supply chain management, and operational logistics to keep everything running efficiently behind the scenes.",
  },

  {
    title: "Health & Safety",
    description:
      "At RZ Hospitality, we believe that safety and compliance are non-negotiable. Whether you’re running a hotel, restaurant, or event space, we ensure your business meets—and exceeds—industry regulations while creating a secure environment for guests and staff.\n\nHere’s how we safeguard your operations:\n\n- Regulatory Compliance: Stay ahead of local, national, and international regulations, from food safety (HACCP) to fire safety codes and labor laws.\n- Health & Safety Programs: Implement tailored protocols for hygiene, allergen control, PPE usage, and emergency response to protect everyone on-site.\n- Risk Assessments: Proactively identify and mitigate risks, from slip-and-fall hazards to equipment safety, ensuring a worry-free environment.\n- Staff Training: Equip your team with certified training in health, safety, and compliance best practices, fostering a culture of accountability.\n- Audits & Inspections: Conduct regular audits to maintain standards and prepare seamlessly for official inspections or certifications.\n- Crisis Management: Develop clear action plans for emergencies, including outbreaks, natural disasters, or security incidents.",
  },

  {
    title: "Interim Management",
    description:
      "At RZ Hospitality, we understand that businesses sometimes need temporary leadership or specialized expertise to navigate transitions, challenges, or growth opportunities. That’s where we step in. With a hands-on approach, we take full responsibility for managing your operations, ensuring continuity and success during critical periods.\n\nHere’s how we support your business:\n\n- Leadership: We provide experienced interim managers who step into key roles, offering strategic direction and stability.\n- Operational Oversight: From day-to-day management to long-term planning, we cover every aspect of your business to keep things running smoothly.\n- Specialized Expertise: Whether it’s restructuring, crisis management, or launching new initiatives, we bring the skills and knowledge needed to achieve your goals.\n- Results-Driven: We focus on delivering measurable outcomes, from improving efficiency to driving profitability.",
  },

  {
    title: "Finance",
    description:
      "At RZ Hospitality, we know that robust financial planning is the backbone of a successful hospitality business. Our team brings extensive experience in managing finances, including EBITDA optimization, to ensure your business remains profitable and sustainable.\n\nHere’s how we can help:\n\n- Financial Planning: We create tailored financial strategies to align with your business goals, ensuring long-term stability and growth.\n- EBITDA Expertise: With a deep understanding of EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization), we focus on maximizing your operational profitability.\n- Cost Control: We identify areas to reduce expenses without compromising quality, helping you maintain a healthy bottom line.\n- Revenue Enhancement: We implement strategies to boost income streams, from optimizing pricing to improving operational efficiency.\n\nWhether you’re looking to improve cash flow, increase profitability, or plan for future investments, we’re here to help you navigate your financial journey with confidence.",
  },

  {
    title: "F&B Operations",
    description:
      "At RZ Hospitality, we believe exceptional food and beverage experiences are at the heart of hospitality. Whether you’re running a hotel restaurant, bar, or a standalone dining venue, we craft strategies that elevate your offerings, delight guests, and drive profitability.\n\nHere’s how we elevate your F&B operations:\n\n- Menu Innovation: We design creative, seasonally inspired menus that cater to diverse tastes, from local flavors to global cuisine, ensuring your offerings stand out.\n- Ingredient Sourcing: Partner with us to source premium, sustainable ingredients that align with your brand values and appeal to eco-conscious guests.\n- Beverage Excellence: From craft cocktails to curated wine lists, we develop beverage programs that complement your menu and enhance guest satisfaction.\n- Staff Training: We train your team in service excellence, mixology, and culinary techniques to ensure consistency and professionalism.\n- Cost Efficiency: Smart inventory management, waste reduction, and vendor negotiations to keep your margins healthy without compromising quality.\n- Guest Engagement: Create memorable dining experiences with themed nights, chef collaborations, or interactive dining concepts that keep guests returning.\n\nWhy work with us?\nWe blend creativity with commercial savvy, ensuring your F&B operations not only meet guest expectations but exceed them—turning meals into moments they’ll rave about.\n\nReady to transform your food and beverage offerings? Let’s cook up success together!",
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
            delay: 3500,
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
                  <div className="bg-gradient-to-b relative from-[#bfb2a9] to-[#737861] rounded-lg p-4 pt-8">
                    <div className="flex flex-col aspect-square  p-6 gap-4 text-white">
                      <h1 className="text-4xl">{service.title}</h1>
                      <div className="w-full h-[2px] my-4 bg-white rounded-full"></div>
                      <div>
                        <h1 className="line-clamp-4">{service.description}</h1>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Dialog>
                          <DialogTrigger>
                            <div className="text-white font-semibold px-6 py-2">
                              <div className="underline">Read More</div>
                            </div>
                          </DialogTrigger>
                          <DialogContent
                            className="bg-main lg:w-4/5 rounded-xl bg-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-4/5 lg:mx-0  overflow-y-scroll"
                            style={{
                              backgroundImage: 'url("/images/Lines.png")',
                            }}
                          >
                            <DialogHeader>
                              <div className="flex items-center justify-center">
                                <img
                                  src="/images/logo.png"
                                  alt=""
                                  className="w-44 h-auto"
                                />
                              </div>
                              <DialogTitle className="lg:text-3xl text-xl text-white">
                                {service.title}
                              </DialogTitle>
                              <DialogDescription className="lg:text-lg text-left text-sm text-slate-50 whitespace-pre-line">
                                {service.description}
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
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
