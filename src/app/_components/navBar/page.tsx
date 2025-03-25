"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import Data from "./Drawerdata";
import Link from "next/link";
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
const NavBar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation links
  const navLinks = [
    { name: "Our services", href: "#our-services" },
    { name: "About US", href: "#about-us" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "FAQ", href: "#FAQ" },
  ];

  return (
    <nav className=" bg-white dark:bg-dark fixed w-full z-20 top-0 start-0 lg:py-4 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 lg:py-0 py-2 lg:pt-5">
        {/* Logo */}
        <Link
          href="/"
          className="lg:absolute top-0 left-0 flex items-center  rtl:space-x-reverse lg:px-12 lg:py-7 lg:z-50 rounded-r-2xl lg:bg-white lg:dark:bg-dark"
        >
          <img
            src="/images/logo.png"
            className="lg:w-44 w-24 h-auto"
            alt="RZ Logo"
          />
        </Link>
        <div></div>
        {/* Modal and Menu Toggle */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <div className=" flex gap-2 items-center">
            <div>
              <DarkModeSwitcher />
            </div>
            <button
             onClick={() => {
              const section = document.querySelector("#contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="before:ease hidden lg:block p-2 px-6 text-main dark:text-white dark:border-slate-200 rounded-full relative  overflow-hidden border-2 bg-white dark:bg-dark border-main shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-main before:transition-all before:duration-300 hover:text-white hover:shadow-main2 hover:before:-rotate-180">
              <p className=" relative z-10 text-lg"> Contact Us</p>
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-dark md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <div
                  onClick={() => {
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block py-2 px-3 cursor-pointer rounded ${
                    path === link.href
                      ? "text-white bg-main md:bg-transparent md:text-main"
                      : "text-gray-900 dark:text-slate-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
                  }`}
                  aria-current={path === link.href ? "page" : undefined}
                >
                  {link.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
          <Data />
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
