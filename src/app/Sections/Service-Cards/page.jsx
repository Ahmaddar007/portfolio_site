"use client"

import { Shirt } from "lucide-react";
import React, { useEffect } from "react";
import FancyText from "../FancyTexxt/page";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServiceCards = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Easing function for animations
      once: true, // Trigger animations only the first time the section enters
      mirror: true, // Disable re-triggering animations when scrolling back up
    });
  }, []);

  return (
    <>
      <FancyText />
      <div className="mb-32">

        <div className="relative flex gap-4 justify-center overflow-hidden py-10">
          <div data-aos="fade-up" data-aos-delay="300" className="group border border-gray-300 shadow-md hover:shadow-lg relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-gray-900/5 transition-all duration-500 hover:-translate-y-5  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[14]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-500 group-hover:bg-sky-400">
                <Shirt className="w-10 h-auto text-white" />
              </div>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a new
                  idea, or creating a demo to share online.
                </p>
              </div>

              <div className="pt-5 text-xl font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Clean Wash Service
                  </a>
                </p>
              </div>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <ul>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2  border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="800"  className="group border border-gray-300 shadow-md hover:shadow-lg relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-gray-900/5 transition-all duration-500 hover:-translate-y-5  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[14]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-500 group-hover:bg-sky-400">
                <Shirt className="w-10 h-auto text-white" />
              </div>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a new
                  idea, or creating a demo to share online.
                </p>
              </div>

              <div className="pt-5 text-xl font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Clean Wash Service
                  </a>
                </p>
              </div>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <ul>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2  border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="1300" className="group border border-gray-300 shadow-md hover:shadow-lg relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-gray-900/5 transition-all duration-500 hover:-translate-y-5  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[14]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-500 group-hover:bg-sky-400">
                <Shirt className="w-10 h-auto text-white" />
              </div>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a new
                  idea, or creating a demo to share online.
                </p>
              </div>

              <div className="pt-5 text-xl font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Clean Wash Service
                  </a>
                </p>
              </div>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <ul>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="py-2  border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>

  );
};

export default ServiceCards;
