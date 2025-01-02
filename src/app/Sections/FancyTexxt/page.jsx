import React from "react";

const FancyText = () => {
  return (
    <div>
      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div class="blur-[106px] h-56 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-blue-500 dark:to-indigo-600"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative">
            <div class="flex items-center justify-center -space-x-2">
              <img
                loading="lazy"
                width="400"
                height="400"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="member photo"
                class="h-8 w-8 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="member photo"
                class="h-12 w-12 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="member photo"
                class="z-10 h-16 w-16 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="member photo"
                class="relative h-12 w-12 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="member photo"
                class="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div class="mt-6 m-auto space-y-6 w-full">
              <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Get Started now
              </h1>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Discover your potential
                <span class="px-2 py-1 relative inline-block">
                  <svg
                    class="stroke-current bottom-0 absolute text-rose-300 -translate-x-2"
                    viewBox="0 0 410 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                      stroke-width="12"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span class="relative">with us</span>
                </span>
              </p>


              <div class="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  class="relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span class="relative text-base font-semibold text-white">
                    Get Started
                  </span>
                </a>
                <a
                  href="#"
                  class="relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span class="relative text-base font-semibold text-white">
                    More about
                  </span>
                </a>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyText;
