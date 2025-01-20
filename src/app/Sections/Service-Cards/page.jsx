import { useState } from "react";
import { CheckCircle, Shirt, User, User2Icon } from "lucide-react";
import React from "react";
import FancyText from "../FancyTexxt/page";

const ServiceCards = () => {
  const [services] = useState([
    {
      id: 1,
      icon: <Shirt className="w-10 h-auto text-white" />,
      title: "Clean Wash Service",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      features: [
        "Lorem, ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor sit amet consectetur",
        "Affordable pricing",
        "High-quality detergents used",
      ],
    },
    {
      id: 2,
      icon: <User className="w-10 h-auto text-white" />,
      title: "Premium Dry Cleaning",
      description:
        "Our premium dry cleaning service ensures your clothes are handled with care and returned in pristine condition.",
      features: [
        "Custom care for delicate fabrics",
        "Quick turnaround times",
        "Environmentally friendly cleaning solutions",
        "Affordable pricing",
        "High-quality detergents used",
      ],
    },
    {
      id: 3,
      icon: <CheckCircle className="w-10 h-auto text-white" />,
      title: "Express Laundry",
      description:
        "Fast and efficient laundry service designed to save your time and keep your wardrobe fresh.",
      features: [
        "Same-day service available",
        "Affordable pricing",
        "High-quality detergents used",
        "Affordable pricing",
        "High-quality detergents used",
      ],
    },
  ]);

  return (
    <>

      <FancyText />

      <div className="mb-32 w-full">

        <div className="w-full grid grid-cols-3 max-[770px]:grid-cols-1 flex-nowrap max-[770px]:px-[5%] px-[10%] gap-4 justify-center py-10">

          {services.map((service) => (

            <div
              key={service.id}
              className="group border border-gray-300 shadow-md hover:shadow-lg relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-gray-900/5 transition-all duration-500 hover:-translate-y-5"
            >

              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[14]"></span>

              <div className="relative z-10">

                <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-500 group-hover:bg-sky-400">
                  {service.icon}
                </div>

                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{service.description}</p>
                </div>

                <div className="pt-5 text-xl font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 group-hover:text-white"
                    >
                      {service.title}
                    </a>
                  </p>
                </div>

                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <ul>
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`py-2 ${
                          index < service.features.length - 1
                            ? "border-b border-gray-200"
                            : "border-gray-200"
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
            </div>

          ))}

        </div>
      </div>
    </>
  );
};

export default ServiceCards;
