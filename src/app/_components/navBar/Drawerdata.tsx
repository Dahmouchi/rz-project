/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
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
                <Link
                  href={item.href || "#"}
                  className={`text-slate-700 hover:bg-gray-200 uppercase hover:text-slate-900 block p-2 rounded-md text-base font-medium ${path === item.href && "text-main bg-gray-2 rounded-none font-bold"}`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>

                {/* Render submenu if it exists */}
                {item.submenu && (
                  <div className="ml-4">
                    {item.submenu.map((subItem:any) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href || "#"}
                        className={`text-slate-700 hover:bg-gray-200 hover:text-slate-900 block p-2 rounded-md text-base font-medium ${path === subItem.href && "text-slate-700 bg-gray-2 font-bold"}`}
                        aria-current={subItem.current ? "page" : undefined}
                      >
                        - {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
