import React from "react";

const FancyText = () => {
  return (
    <div className="mt-20">
      <div className="relative py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-blue-500 dark:to-indigo-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative">
            <div className="flex items-center justify-center -space-x-2">
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
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="member photo"
                className="z-10 h-16 w-16 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="member photo"
                className="relative h-12 w-12 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="mt-6 m-auto space-y-6 w-full">
              <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Our Services
              </h1>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Discover your potential
                <span className="px-2 py-1 relative inline-block">
                  <svg
                    className="stroke-current bottom-0 absolute text-rose-300 -translate-x-2"
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
                  <span className="relative">with us</span>
                </span>
              </p>


              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white">
                    Get Started
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white">
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
