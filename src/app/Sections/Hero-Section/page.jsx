"use client"

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const Hero = () => {
  const [target, setTarget] = useState(null); // State to manage the target element
  const { isIntersecting } = useIntersectionObserver(target);

  return (
    <div className="grid grid-cols-2 gap-10 px-[5%] py-20 bg-white">
      <div className="flex relative flex-col justify-center space-y-6">
        <h2 className="text-blue-600 text-6xl !font-semibold">
          Doraemon Collection
        </h2>
        <p className="text-gray-700 font-normal text-lg leading-relaxed">
          Explore our exclusive Doraemon Collection, featuring iconic designs
          and timeless pieces inspired by the beloved character. Celebrate the
          charm and nostalgia.
        </p>
        <div ref={(el) => setTarget(el)} className="flex gap-3">
          <Button
            className={`bg-blue-600 p-6 rounded-full text-white font-semibold text-md transition-transform duration-1000 ease-out ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            Lorem Ipsum
          </Button>
          <Button
            className={`bg-blue-500 p-6 rounded-full text-white font-semibold text-md transition-transform duration-1000 ease-out ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Lorem Ipsum
          </Button>
        </div>
      </div>

      <div className="flex relative justify-center items-center">
        <div className="absolute mt-5 justify-center items-center flex">
          <img
            className="z-20 text-blue-500 h-auto w-3/4"
            src="https://utfs.io/f/vm2okaME29juPLFLxSyTd6rYMlUazXEvVy5HbfupxD9mPG4i"
          />
          <img
            className="absolute -top-52 -left-32 z-20 text-blue-500 h-auto w-52"
            src="https://utfs.io/f/vm2okaME29jujXBrzo30jh5ZniMeLTuItDbWrUYSP9pQloEx"
          />
          <img
            className="absolute -top-48 right-0 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29juWyYWROfTcLyZDikjAtpxHUVG1hRvJma54gOQ"
          />
          <img
            className="absolute -bottom-36 -left-16 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29jugD62rkFvp84ItSReTN70WyCdXDYm6raFOQnZ"
          />
          <img
            className="absolute -bottom-40 -right-16 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29jue6kQ1cmy38BTF1VR6JD7n2fXHwLbmruoUCMk"
          />
        </div>

        <img
          className="top-0 w-3/4"
          src="https://utfs.io/f/vm2okaME29juuqZlNVgjyJeHg1tY6R4mbkVlD2EFOcZrNILS"
        />
      </div>
    </div>
  );
};

export default Hero;
