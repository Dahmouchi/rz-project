import React from "react";
const stats = [
  { value: "12+", description: "Years of Industry Expertise" },
  { value: "100%", description: "Client-Centric Approach" },
  { value: "10+", description: "Tailored Solutions for Sustainable Growth" },
  {
    value: "120+",
    description: "Extensive Network of Hospitality Professionals",
  },
];
const About = () => {
  return (
    <div className="lg:py-8 lg:px-8 py-4 px-4" id="about-us">
      <div
        className="bg-main lg:rounded-3xl rounded-xl text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center"
        style={{
          backgroundImage: 'url("/images/Lines.png")',
        }}
      >
        <div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg"> About us</h1>
        </div>
          
          <div className="w-full h-[2px] bg-white lg:my-4 my-2"></div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
          <div className="flex flex-col lg:gap-8 gap-6 lg:w-1/2 lg:text-lg text-sm">
            <h1 className="text-second lg:text-5xl text-3xl">At RZ Hospitality, </h1>
            <h1>
              we are devoted to elevating hospitality businesses through expert
              guidance, strategic innovation, and operational excellence.
              Founded in 2023 by Ryda Zarhouni, our firm brings together a
              wealth of industry expertise, offering bespoke consulting
              solutions that empower hospitality professionals to navigate
              challenges and seize opportunities with confidence.
            </h1>
            <h1>
              With over a decade of experience, we specialize in commercial
              strategy, operational management, recruitment, and strategic
              planning, ensuring that every aspect of your business is
              meticulously optimized for success. Our extensive network of
              seasoned hospitality professionals enables us to deliver tailored
              solutions that enhance efficiency, profitability, and guest
              satisfaction.
            </h1>
            <h1>
              We believe that hospitality is more than a business—it is an art,
              a seamless fusion of service, experience, and excellence. Whether
              you seek to refine your operations, elevate your brand, or build a
              high-performing team, RZ Hospitality is your trusted partner in
              achieving enduring success.
            </h1>
            <h1>💡 Let&apos;s shape the future of hospitality together.</h1>
          </div>
          <div>
            <div className="max-w-4xl mx-auto grid lg:grid-cols-1 md:grid-cols-2 grid-cols-2 lg:gap-12 gap-3 lg:px-6 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <h1 className="lg:text-5xl text-2xl font-semibold">{stat.value}</h1>
                  <p className="lg:text-lg text-sm mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
