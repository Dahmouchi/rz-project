/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
//import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PhoneInput } from "@/components/phone-input";
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
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);
    // Here you can send the data to your API
    setLoading(false);
  };
  return (
    <div id="contact">
      <div className="relative py-8 min-h-screen p-2">
        <div
          className="w-3/4 h-[500px] bg-cover relative bg-center hidden lg:block"
          style={{ backgroundImage: 'url("/images/team.jpg")' }}
        >
          <div className="bg-yellow-800/40 absolute w-full h-full hidden"></div>
        </div>
        <div className="bg-white lg:border-4 border-2 border-second rounded-lg dark:bg-dark lg:p-8 p-4 lg:w-2/3 lg:absolute right-16 top-16">
          <h2 className="text-yellow-500 lg:text-4xl text-2xl font-semibold">
            APPLY FOR A SERVICE
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-sm mt-2 font-light">
            We&apos;d love to hear from you! Whether you&apos;re interested in
            learning more about our services or ready to take your business to
            the next level, our team is here to assist.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Please enter your full name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Please provide a valid email address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
           
            <div className="">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <PhoneInput       defaultCountry="GB"           placeholder="Your phone number"
              />
               {/* Business Name <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"gb"} // Default country (change as needed)
                    enableSearch={true} // Enable country search
                    inputClass="w-full p-2"
                  />
                )}
              />*/}

            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Business Name
              </label>
              <input
                {...register("businessName", {
                  required: "Business name is required",
                })}
                placeholder="Enter the name of your business"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          
            {/* Email Address */}

            {/* Type of Business */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Type of Business
              </label>
              <select
                {...register("businessType", {
                  required: "Please select a type",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select the type of your business</option>
                <option value="Hotel">Hotel</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Bar">Bar</option>
                <option value="Coffeeshop & Brunch">Coffeeshop & Brunch</option>
              </select>
            </div>

            {/* Phone Number */}

            {/* How Can We Help */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                How Can We Help You?
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">
                  Select the service(s) you&apos;re interested in
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Message text goes here"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-text2 via-text to-text2 lg:w-1/2 w-full  text-white px-6 py-2 rounded-md"
              >
                {loading ? "Applying..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
