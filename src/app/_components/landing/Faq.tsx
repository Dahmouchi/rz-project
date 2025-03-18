"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
const faqs = [
  {
    question: "What types of hospitality businesses do you work with?",
    answer:
      "At RZ Hospitality, we work with a diverse range of hospitality businesses, including hotels, restaurants, bars, coffeeshops, and other hospitality establishments. We tailor our services to meet the unique needs of each client, ensuring optimal results and sustainable growth.",
  },
  {
    question: "What services do you offer to improve hotel operations?",
    answer:
      "We offer a comprehensive suite of services for hotels, including revenue management, operational efficiency optimization, guest experience enhancement, and staff training. Our goal is to streamline processes, boost profitability, and improve guest satisfaction.",
  },
  {
    question:
      "How can your services help my restaurant increase profitability?",
    answer:
      "We focus on menu optimization, service improvement, and cost control strategies. By refining your menu design, improving kitchen and dining room operations, and implementing effective marketing, we help your restaurant increase efficiency and maximize revenue.",
  },
  {
    question: "Do you assist with marketing and branding?",
    answer:
      "Yes, we offer sales and marketing strategies to help increase visibility and attract new customers. This includes digital marketing, social media strategies, and brand positioning, all tailored to your specific target audience and goals.",
  },
  {
    question: "How do I get started working with RZ Hospitality?",
    answer:
      "Getting started is simple! Reach out to us via our contact page, and we'll arrange a consultation to understand your business needs. From there, we’ll craft a customized strategy that aligns with your vision and objectives.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:p-24 p-4" id="FAQ">
      <div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg">FAQ</h1>
        </div>
        
        <div className="w-full h-[2px] bg-second lg:my-4 my-2"></div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 py-8">
        <div className="flex flex-col justify-between ">
          <h1 className="lg:text-5xl text-2xl bg-gradient-to-r from-main3 to-gray-500 inline-block text-transparent bg-clip-text lg:w-2/3">
            Answers to the frequently asked questions.
          </h1>
          <button className="bg-gradient-to-r from-text2 text-white via-text to-text2 hidden lg:block text-xl my-8 lg:w-2/6 font-semibold  px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </button>
        </div>
        <div className="space-y-4 mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full flex justify-between items-center text-left  text-lg py-3"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-light">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-r from-text2 text-white via-text to-text2 lg:hidden text-xl my-8 lg:w-1/4 font-semibold  px-8 py-2 rounded-full ">
            <div>Get in touch</div>
          </button>
      </div>
    </div>
  );
};

export default Faq;
