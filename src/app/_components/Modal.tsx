"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";

const Modal = () => {
  const [openModal, setModal] = useState(false);
  const features = [
    "Cours en vidéo a n'importe quelle heure et de VOTRE CHAMBRE",
    "Supports PDF pour renforcer votre soutien scolaire",
    "Examens et corrigés",
    "Programme pédagogique guidé par les meilleurs profs du royaume",
    "Abonnement pour toute l'année à PETIT PRIX!!",
  ];
  const text = "PACK Premium CinqCinq ★".split(" ");

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]); // Runs whenever openModal changes

  const handleModal = () => {
    setModal(!openModal);
  };
  return (
    <div className="">
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-700 flex justify-center items-center z-50 bg-opacity-20 p-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className=" lg:max-w-5xl relative  bg-white shadow-lg py-2 px-2 rounded-2xl lg:w-1/3 w-full  border-4 border-main "
          >
            <div className="relative z-10">
              <div className="flex items-center justify-end">
                <div
                  onClick={handleModal}
                  className="bg-yellow-100 rounded-full cursor-pointer text-center mb-4 mx-3 flex items-center justify-center p-1 "
                >
                  <X className="text-yellow-700 w-5 h-auto" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/cinqcinq.png" alt="" className="w-1/2 " />
              </div>
              <h2 className="text-2xl font-bold text-black  py-3 px-4 mb-2 text-center">
                Ne laissez pas le hasard guider VOTRE avenir. Agis maintenant !
                Profitez du{" "}
                <h2 className=" bg-clip-text bg-gradient-to-r to-main from-yellow-500  text-xl font-extrabold md:text-5xl lg:text-3xl">
                  {text.map((el, i) => (
                    <motion.span
                      className="text-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: i / 7,
                      }}
                      key={i}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                </h2>
              </h2>

              <div className="px-4 ">
                <div className="">
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-black text-left"
                      >
                        <svg
                          className="w-4 h-4 text-main mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12" y2="8" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center py-4">
                <h1 className="font-bold tracking-widest">
                  Qu&apos;attendez-vous?
                </h1>
              </div>
              <div className="mb-8 flex items-center justify-center">
                <a
                  href="/dashboard/payment"
                  className=" bg-cover  rounded-full shadow-md shadow-black/50 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-200 active:translate-y-px inline-block w-fit"
                  style={{ backgroundImage: 'url("/button.jpg")' }}
                >
                  <div className="font-bold flex items-center justify-center text-black  rounded-full border-b border-yellow-700 group-active:border-yellow-800 group-active:shadow-inner  px-8 py-2 relative">
                    <div className="flex items-center gap-2 whitespace-nowrap transition">
                      Rejoignez-nous
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div
        onClick={handleModal}
      >
        <div className=" text-white font-semibold px-6 py-2 cursor-pointer ">
          <div className="underline">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
