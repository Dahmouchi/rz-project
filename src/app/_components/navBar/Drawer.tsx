import React, { ReactNode } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={`fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 transition-all  duration-500 ease-in-out ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}

    >
      <section
        className={`absolute left-0 bg-cover bg-no-repeat z-50 h-full w-[340px] max-w-lg transform bg-white dark:bg-dark shadow-xl transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundImage: 'url("/images/Lines.png")',
        }}
      >
        <article className="flex h-full flex-col space-y-6 pb-10">
          <header className="flex items-center justify-end p-4">
           
            <X
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div className="flex items-center justify-center">
          <Link href="/"><img
              className="h-auto w-32"
              src="/images/logo.png"
              alt="Courses-Logo"
              onClick={() => {
                setIsOpen(false);
              }}
            /></Link>
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className="h-full w-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
