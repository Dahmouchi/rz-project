"use client";
import React from "react";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
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
    title: "Hotels",
    description:
      "At RZ Hospitality, we work hands-on with hotels of all sizes and styles—from luxury resorts to boutique properties, city hotels to budget accommodations. Our practical, results-driven approach ensures your operations run smoothly, your guests leave satisfied, and your bottom line grows.\n\n\n" +
      
      "Here’s how we deliver for every hotel type:\n\n" +
      "- Revenue Optimization: Dynamic pricing strategies, upselling techniques, and occupancy management tailored to your market.\n" +
      "- Operational Efficiency: Streamline workflows, reduce costs, and modernize systems—whether it’s front-desk processes, housekeeping, or inventory management.\n" +
      "- Guest Experience Upgrades: Train staff in personalized service, implement tech solutions like mobile check-ins, and design loyalty programs that keep guests returning.\n" +
      "- Customized Solutions: No two hotels are alike. We adapt to your unique needs, whether you’re a historic inn, a corporate chain, or a beachfront resort.\n" +
      "- Crisis Support: Immediate action plans for staffing shortages, seasonal slumps, or unexpected challenges.\n\n\n" +
  
      "Why hotels trust us:\n\n" +
      "- Proven Results: We’ve boosted revenue, ratings, and efficiency for properties worldwide.\n" +
      "- Scalable Strategies: Solutions that work for 10-room boutiques or 500-room complexes.\n" +
      "- 24/7 Partnership: We’re in the trenches with you—no task is too big or small.\n\n\n" +
  
      "Let’s roll up our sleeves and transform your hotel into a well-oiled, guest-loved, profit-driving machine. Ready to get started?"
  },
  {
    title: "Restaurants",
    description:
      "At RZ Hospitality, we work side-by-side with restaurants of all types—from cozy bistros and family diners to high-end eateries and global franchises. Our hands-on approach focuses on turning challenges into opportunities, refining every detail to boost profitability, streamline operations, and create unforgettable dining experiences.\n\n\n" +
  
      "Here’s how we elevate your restaurant:\n\n" +
      "- Menu Engineering: Design cost-effective, crave-worthy menus that balance creativity with profitability, using seasonal ingredients and data-driven trends.\n" +
      "- Kitchen Optimization: Overhaul workflows, reduce waste, and upgrade equipment to speed up service without sacrificing quality.\n" +
      "- Staff Training: Sharpen front-of-house hospitality and back-of-house efficiency with workshops in service excellence, culinary techniques, and crisis management.\n" +
      "- Branding & Marketing: Craft a unique identity—from social media campaigns to local partnerships—that attracts foodies and builds loyalty.\n" +
      "- Cost Control: Negotiate supplier deals, optimize inventory, and implement tech like smart POS systems to tighten margins.\n" +
      "- Guest Retention: Launch loyalty programs, themed nights, or chef’s tables to turn first-time visitors into regulars.\n" +
      "- Sustainability Focus: Source locally, reduce waste, and adopt eco-friendly practices that resonate with modern diners.\n\n\n" +
  
      "Why restaurants thrive with us:\n\n" +
      "- Adaptable Solutions: Whether you’re a food truck or a Michelin-starred venue, we tailor strategies to fit your vision.\n" +
      "- Proven Results: Higher foot traffic, improved online reviews, and stronger profit margins—guaranteed.\n" +
      "- Full Transparency: No jargon, just clear metrics and actionable steps."
  }
  ,
  {
    title: "Bars",
    description:
      "At RZ Hospitality, we turn bars into vibrant, profit-driving hotspots—whether it’s a chic cocktail lounge, a neighborhood pub, or a high-energy nightclub. Our hands-on expertise covers everything from crafting standout drinks to streamlining operations, ensuring your bar stands out in a crowded market.\n\n\n" +
  
      "Here’s how we elevate your bar:\n\n" +
      "- Signature Beverage Programs: Design unique cocktail menus, curated wine lists, and craft beer selections that keep guests coming back for more.\n" +
      "- Operational Efficiency: Optimize workflows—speed up service, reduce waste, and manage inventory smarter with tech-driven solutions.\n" +
      "- Revenue Boosters: Dynamic pricing, happy hour strategies, and upselling tactics to maximize every transaction.\n" +
      "- Atmosphere & Ambiance: Create Instagram-worthy interiors, themed nights, and live entertainment concepts that draw crowds.\n" +
      "- Compliance & Safety: Navigate licensing, health regulations, and staff training to keep your bar running smoothly—and legally.\n" +
      "- Staff Excellence: Train bartenders in mixology mastery and customer engagement to deliver unforgettable experiences.\n" +
      "- Local Partnerships: Collaborate with breweries, distilleries, and influencers to amplify your brand’s reach.\n\n\n" +
  
      "Why bars thrive with us:\n\n" +
      "- Versatility: Solutions tailored to dive bars, rooftop venues, speakeasies, and beyond.\n" +
      "- Trend-Driven: Tap into craft cocktails, zero-proof menus, or experiential drinking trends.\n" +
      "- Results You Can Measure: Higher foot traffic, repeat customers, and healthier margins—guaranteed."
  }
  ,
  {
    title: "Coffeeshops & Brunch",
    description:
      "At RZ Hospitality, we elevate your coffeeshop into a go-to destination for both caffeine lovers and brunch enthusiasts. Whether you’re a cozy neighborhood spot or a trendy urban café, we help you master the art of blending specialty coffee with irresistible brunch offerings—all while streamlining operations and building a loyal customer base.\n\n\n" +
  
      "Here’s how we brew success for your business:\n\n" +
      "- Brunch Menu Magic: Craft crave-worthy brunch menus featuring fresh, locally sourced ingredients, from avocado toast to gourmet pancakes, paired perfectly with your coffee lineup.\n" +
      "- Operational Efficiency: Simplify workflows for peak hours—speed up coffee brewing, optimize kitchen prep, and reduce wait times without compromising quality.\n" +
      "- Brand Identity: Strengthen your unique vibe with cohesive branding, from Instagrammable interiors to packaging that tells your story.\n" +
      "- Specialty Coffee Excellence: Train baristas in latte art, pour-over techniques, and brewing consistency to keep coffee connoisseurs coming back.\n" +
      "- Eco-Friendly Practices: Implement sustainable solutions like compostable packaging, zero-waste initiatives, and ethical bean sourcing to attract conscious consumers.\n" +
      "- Brunch Experience Design: Create themed brunch events (e.g., bottomless coffee Saturdays, live acoustic mornings) to drive foot traffic and social buzz.\n" +
      "- Tech Integration: Upgrade POS systems, loyalty apps, and online ordering to cater to fast-paced, tech-savvy customers.\n" +
      "- Profit Margins: Balance premium ingredients with cost control—negotiate supplier deals and minimize food waste.\n\n\n" +
  
      "Why choose us?\n\n" +
      "- Dual Focus: We master the synergy between coffee culture and brunch trends, turning your café into a daytime hotspot.\n" +
      "- Turnkey Solutions: From menu design to staff training, we handle every detail so you can focus on your guests.\n" +
      "- Community Building: Foster loyalty through personalized service, local partnerships, and events that make your shop the heart of the neighborhood.\n\n\n" +
  
      "Ready to transform your coffeeshop into the ultimate brunch-and-brew haven? Let’s grind out a plan together! ☕🥑"
  }
  ,
];
const Services = () => {

  return (
    <div id="our-services">
      <div className="w-full text-center flex items-center justify-center mt-8">
        <div>
          <h1 className="lg:text-7xl text-4xl bg-gradient-to-r from-text2 via-text to-text2 inline-block text-transparent bg-clip-text">
            Our Services
          </h1>
          <div className="flex items-center justify-center lg:mt-4 mt-2">
            <h1 className=" lg:text-lg text-sm px-4 text-center text-slate-400 dark:text-gray-300 lg:w-2/3">
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
                  <div className="bg-gradient-to-b relative from-text2 to-text rounded-lg p-4 pt-8">
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
                          <DialogContent className=" lg:w-4/5 rounded-xl bg-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-4/5 lg:mx-0  overflow-y-scroll">
                          <DialogHeader>
                              <div className="flex items-center justify-center">
                                <img
                                  src="/images/logo.png"
                                  alt=""
                                  className="w-44 h-auto"
                                />
                              </div>
                              <DialogTitle className="lg:text-3xl text-xl text-white ">
                                {service.title}
                              </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="lg:text-lg text-left text-sm text-slate-50 whitespace-pre-line pt-4">
                              {service.description}
                            </DialogDescription>
                            <DialogFooter>
                            <DialogClose>
                            <div className="bg-gradient-to-r mt-5  font-semibold from-text2 via-text to-text2  px-4 py-2 rounded-full text-slate-100">
                  <div>Close</div>
                </div>
                            </DialogClose>
                            </DialogFooter>
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
        <div className="lg:px-16 lg:w-full p-3">
          <div className="w-full mx-auto ">
            <h1 className="lg:text-3xl text-lg text-center font-bold text-main dark:text-white">
             Who we serve
            </h1>
          </div>
          <div className="mx-auto mt-6 lg:grid grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-6 relative border-4 border-main rounded-xl p-4">
                {/* Section Title */}
                <h2
                 
                  className="lg:text-5xl text-3xl cursor-pointer transition-colors 
                   text-second font-semibold"
                >
                  {section.title}
                    <div className="w-full h-[2px] bg-second my-4"></div>
                  
                </h2>

                {/* Description (Only Show When Active) */}
                  <div className="mt-2 p-4 ">
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
