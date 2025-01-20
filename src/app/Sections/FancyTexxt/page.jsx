"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FancyText = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Easing function
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="mt-20">
      <div className="relative py-16">
        {/* Background Gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div
            className="blur-[106px] h-56 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700"
            data-aos="fade-right"
          ></div>
          <div
            className="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-blue-500 dark:to-indigo-600"
            data-aos="fade-left"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative">
            {/* Animated Profile Images */}
            <div
              className="flex items-center justify-center mb-5 -space-x-2"
              data-aos="zoom-in"
            >
              <img
                loading="lazy"
                width="400"
                height="400"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="member photo"
                className="h-12 w-12 rounded-full object-cover"
                data-aos="zoom-in"
                data-aos-delay="200"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="member photo"
                className="z-10 h-16 w-16 rounded-full object-cover"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="member photo"
                className="relative h-12 w-12 rounded-full object-cover"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
                data-aos="zoom-in"
                data-aos-delay="800"
              />
            </div>

            {/* Animated Text Content */}
            <div className="w-full">
              <h1
                className="text-center text-2xl font-bold text-gray-800"
                data-aos="fade-up"
              >
                Our Services
              </h1>

              <p
                className="text-4xl font-bold text-gray-800"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Discover your potential
                <span className="px-2 py-1 relative inline-block">
                  <svg
                    className="stroke-current bottom-0 absolute text-rose-300 -translate-x-2"
                    viewBox="0 0 410 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                      strokeWidth="12"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <span className="relative">with us</span>
                </span>
              </p>

              {/* Animated Buttons */}
              <div
                className="flex mt-5 flex-wrap justify-center gap-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Button className="p-5 font-bold bg-blue-600 text-white rounded-full">
                  Get Started
                </Button>
                <Button className="p-5 font-bold bg-blue-600 text-white rounded-full">
                  Contact Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyText;
