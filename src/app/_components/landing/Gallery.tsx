/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PhotoBlock from "@/components/PhotoBlock";
import { photos } from "@/lib/photos";
import type { NextPage } from "next";
import { useState, useEffect } from "react";

const buildPhotoBlocks = (photos: any, showAll: boolean, isMobile: boolean) => {
  const items = [];
  for (let index = 1; index < 5; index++) {
    const filteredPhotos = photos.filter((photo: any) => photo.column === index);
    const displayedPhotos = showAll
      ? filteredPhotos
      : filteredPhotos.slice(0, isMobile ? 1 : 2); // 1 image per column on mobile, 2 otherwise

    items.push(
      <div key={index} className="flex flex-col justify-start gap-4">
        {displayedPhotos.map((filteredPhoto: any) => (
          <PhotoBlock
            key={filteredPhoto.id}
            image={filteredPhoto.src}
            link={filteredPhoto.link}
            height={filteredPhoto.height}
            heading={filteredPhoto.heading}
          />
        ))}
      </div>
    );
  }
  return items;
};

const Home: NextPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update `isMobile`
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize); // Listen for screen size changes

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup event listener
    };
  }, []);

  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div>
      <main className="relative mx-auto lg:px-28 px-4 py-6 overscroll-none">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-5xl text-3xl text-second">GALLERY</h1>
          <div className="h-[3px] w-32 bg-second"></div>
        </div>
        {!showAll && (
          <div className="w-full lg:h-96 h-44 bg-gradient-to-b from-transparent to-white dark:to-dark absolute bottom-10 z-30"></div>
        )}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          {buildPhotoBlocks(photos, showAll, isMobile)}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowMore}
            className="px-4 py-2 rounded-md underline z-40"
          >
            {showAll ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
