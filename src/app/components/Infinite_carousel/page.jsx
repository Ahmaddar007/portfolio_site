"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Facebook, Airplay, Apple, Star, Tv, Twitter, Coffee, Code } from "lucide-react";

export default function Infinite_Carousel() {
  const [items] = useState([
    { id: 1, Icon: Facebook, alt: "Facebook" },
    { id: 2, Icon: Airplay, alt: "Airplay" },
    { id: 3, Icon: Apple, alt: "Apple" },
    { id: 4, Icon: Star, alt: "Star" },
    { id: 5, Icon: Tv, alt: "TV" },
    { id: 6, Icon: Twitter, alt: "Twitter" },
    { id: 7, Icon: Coffee, alt: "Coffee" },
    { id: 8, Icon: Code, alt: "Code" },
    { id: 1, Icon: Facebook, alt: "Facebook" },
    { id: 2, Icon: Airplay, alt: "Airplay" },
    { id: 3, Icon: Apple, alt: "Apple" },
    { id: 4, Icon: Star, alt: "Star" },
    { id: 5, Icon: Tv, alt: "TV" },
    { id: 6, Icon: Twitter, alt: "Twitter" },
    { id: 7, Icon: Coffee, alt: "Coffee" },
    { id: 8, Icon: Code, alt: "Code" },
  ]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000, // Slow speed for continuous scroll
    slidesToShow: 4, // Adjust the visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Removes pause between slides
    pauseOnHover : false ,
    cssEase: "linear", // Ensures smooth infinite scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>
          {items.map(({ id, Icon, alt }) => (
            <div key={id} className="text-center">
              <div className="flex justify-center items-center h-24 w-24 bg-slate-800 rounded-full mx-auto">
                <Icon size={48} className="text-white" />
              </div>
              <p className="text-white mt-4">{alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
