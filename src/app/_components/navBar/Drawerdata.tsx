/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href?: string;
  current?: boolean;
  submenu?: NavigationItem[]; // Add this line to allow nested submenus
}

const links: NavigationItem[] = [
  { name: "Our services", href: "#our-services" },
  { name: "About US", href: "#about-us" },
  { name: "Gallery", href: "#Gallery" },
  { name: "Testimonials", href: "#Testimonials" },
  { name: "FAQ", href: "#FAQ" },
];

const Data = () => {
  const path = usePathname();

  return (
    <div className="max-w-sm w-full mx-auto rounded-md z-50">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {links.map((item:any) => (
              <div key={item.name}>
                <div
                 onClick={() => {
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }}}
                  
                  className={`text-slate-700 hover:bg-gray-200 dark:text-white text-center uppercase hover:text-slate-900 block p-2 rounded-md text-base font-medium ${path === item.href && "text-main bg-gray-2 rounded-none font-bold"}`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </div>

                
              </div>
            ))}
            <div className="flex items-center justify-center py-4">
            <button
             onClick={() => {
              const section = document.querySelector("#contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="before:ease p-2 px-6 text-main dark:text-white dark:border-slate-200 rounded-full relative  overflow-hidden border-2 bg-white dark:bg-dark border-main shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-main before:transition-all before:duration-300 hover:text-white hover:shadow-main2 hover:before:-rotate-180">
              <p className=" relative z-10 text-lg"> Contact Us</p>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
