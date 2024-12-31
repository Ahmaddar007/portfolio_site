"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function LandingSlider() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Mobile breakpoint at 768px
  };

  useEffect(() => {
    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true, // Enables dots for navigation
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hides arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplaySpeed: 3000, // Adjust speed for mobile
        },
      },
    ],
  };

  // Images for desktop and mobile
  const desktopImages = [
    "https://utfs.io/f/vm2okaME29ju6OhehU10uGoJ0xy9WXwKegFBNbUEhc5pzjZ4", // Desktop image 1
    "https://utfs.io/f/vm2okaME29ju6OhehU10uGoJ0xy9WXwKegFBNbUEhc5pzjZ4", // Desktop image 2
  ];

  const mobileImages = [
    "https://utfs.io/f/vm2okaME29juIf21hi9rumr8HTLDGP7M1wWp2qZcBhf5lR0n", // Mobile image 1
    "https://utfs.io/f/vm2okaME29juIf21hi9rumr8HTLDGP7M1wWp2qZcBhf5lR0n", // Mobile image 2
  ];

  // Choose images based on screen size
  // const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="overflow-hidden w-screen">
      <Slider {...settings}>
        {desktopImages.map((image, index) => (
          <div key={index} className="w-full h-[90vh] flex justify-center items-center bg-gray-100">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
