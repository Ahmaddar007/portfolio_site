"use client";

import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // Import AOS styles

import AOS from "aos";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";

export default function CustomizeSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 770, // For screens <= 770px
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1, // Scroll 1 slide
        },
      },
    ],
  };
  

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Easing function for animations
      once: false, // Trigger animations every time the section is in the viewport
    });
  }, []);

  const SlidesData = [
    {
      id: 1,
      content: (
        <div>
          <img
            src="https://r5o44rt206.ufs.sh/f/vm2okaME29juSnXVegBztIEfeY2M9bRCmVxvHLdTJornWkXP"
            alt="image"
          />
          <div>
            <h1 className="my-3 text-2xl text-center text-gray-800">
              Lorem Ipsum dolor
            </h1>
            <Button className="bg-blue-600 text-white font-semibold w-full rounded-none">
              Customize Now
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <img
            src="https://r5o44rt206.ufs.sh/f/vm2okaME29juU7dnplty7OlbfMWStvDXkp9804RBaJ3KPLTx"
            alt="image"
          />
          <div>
            <h1 className="my-3 text-2xl text-center text-gray-800">
              Lorem Ipsum dolor
            </h1>
            <Button className="bg-blue-600 text-white font-semibold w-full rounded-none">
              Customize Now
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <img
            src="https://r5o44rt206.ufs.sh/f/vm2okaME29juSnXVegBztIEfeY2M9bRCmVxvHLdTJornWkXP"
            alt="image"
          />
          <div>
            <h1 className="my-3 text-2xl text-center text-gray-800">
              Lorem Ipsum dolor
            </h1>
            <Button className="bg-blue-600 text-white font-semibold w-full rounded-none">
              Customize Now
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <img
            src="https://r5o44rt206.ufs.sh/f/vm2okaME29juU7dnplty7OlbfMWStvDXkp9804RBaJ3KPLTx"
            alt="image"
          />
          <div>
            <h1 className="my-3 text-2xl text-center text-gray-800">
              Lorem Ipsum dolor
            </h1>
            <Button className="bg-blue-600 text-white font-semibold w-full rounded-none">
              Customize Now
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div>
          <img
            src="https://r5o44rt206.ufs.sh/f/vm2okaME29juU7dnplty7OlbfMWStvDXkp9804RBaJ3KPLTx"
            alt="image"
          />
          <div>
            <h1 className="my-3 text-2xl text-center text-gray-800">
              Lorem Ipsum dolor
            </h1>
            <Button className="bg-blue-600 text-white font-semibold w-full rounded-none">
              Customize Now
            </Button>
          </div>
        </div>
      ),
    },
    // Add other slides here...
  ];

  return (
    <>
      <div className="text-center mt-48">
        <h2 className="text-4xl font-bold text-blue-600 tracking-wide">
          Customization
        </h2>
        <p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700"
          data-aos="fade-up"
        >
          Your customization about our online tailoring services.
        </p>
      </div>

      <div className="w-[90%] abcde overflow-hidden mx-auto max-[770px]:py-0 py-12">
        <Slider className="" {...settings}>
          {SlidesData.map((slide, index) => (
            <div key={slide.id} className="px-4">
              <div
                className={`rounded-lg text-center overflow-hidden transform transition-all duration-500 ${
                  activeSlide === index
                    ? "scale-105"
                    : "scale-90 opacity-70"
                }`}
              >
                {slide.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
