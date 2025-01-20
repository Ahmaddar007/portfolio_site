"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  // Initialize AOS with `once: true`
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Easing function for animations
      once: true, // Trigger animations only the first time the section enters
      mirror: true, // Disable re-triggering animations when scrolling back up
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10 px-[5%] py-20 bg-white">
      {/* Left Content */}
      <div className="flex relative flex-col justify-center space-y-6">
        <h2
          className="text-blue-600 text-8xl leading-tight !font-extrabold"
          data-aos="fade-right"
        >
          Daryaft
        </h2>
        <p
          className="text-gray-700 font-normal text-lg leading-relaxed"
          data-aos="fade-up"
        >
          Explore our exclusive Doraemon Collection, featuring iconic designs
          and timeless pieces inspired by the beloved character. Celebrate the
          charm and nostalgia.
        </p>
        <div className="flex gap-3" data-aos="fade-up" data-aos-delay="300">
          <Button className="bg-blue-600 p-6 rounded-full text-white font-semibold text-md">
            Lorem Ipsum
          </Button>
          <Button className="bg-blue-500 p-6 rounded-full text-white font-semibold text-md">
            Lorem Ipsum
          </Button>
        </div>
      </div>

      {/* Right Content */}
      <div
        className="flex relative justify-center items-center"
        data-aos="fade-left"
      >
        {/* Overlay Images */}
        <div className="absolute mt-5 justify-center items-center flex">
          <img
            className="z-20 text-blue-500 h-auto w-3/4"
            src="https://utfs.io/f/vm2okaME29juPLFLxSyTd6rYMlUazXEvVy5HbfupxD9mPG4i"
            alt="Main"
          />
          <img
            className="absolute -top-52 -left-32 z-20 text-blue-500 h-auto w-52"
            src="https://utfs.io/f/vm2okaME29jujXBrzo30jh5ZniMeLTuItDbWrUYSP9pQloEx"
            alt="Decoration 1"
            data-aos="zoom-in"
          />
          <img
            className="absolute -top-48 right-0 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29juWyYWROfTcLyZDikjAtpxHUVG1hRvJma54gOQ"
            alt="Decoration 2"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <img
            className="absolute -bottom-36 -left-16 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29jugD62rkFvp84ItSReTN70WyCdXDYm6raFOQnZ"
            alt="Decoration 3"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <img
            className="absolute -bottom-40 -right-16 z-20 text-blue-500 h-auto w-28"
            src="https://utfs.io/f/vm2okaME29jue6kQ1cmy38BTF1VR6JD7n2fXHwLbmruoUCMk"
            alt="Decoration 4"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        </div>

        <img
          className="top-0 w-3/4"
          src="https://utfs.io/f/vm2okaME29juuqZlNVgjyJeHg1tY6R4mbkVlD2EFOcZrNILS"
          alt="Main Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
