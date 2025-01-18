import { Avatar, AvatarGroup } from "@nextui-org/react";
import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa"; // Example icons
import { TbStarsFilled } from "react-icons/tb";
import CountUp from "react-countup"; // Import CountUp

const Features = () => {
  // State to control if the section is in view
  const [inView, setInView] = useState(false);
  
  // Ref for the section
  const sectionRef = useRef(null);
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation once the section is in view
        }
      },
      { threshold: 0.5 } // Adjust this to control when the section is considered in view
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative bottom-28 px-[10%] py-12">
      <div className="w-full grid grid-cols-2 bg-blue-500 rounded-lg shadow-xl">
        {/* first */}
        <div className="py-3">
          <div className="flex gap-8 py-5 border-r border-white justify-center items-center">
            <AvatarGroup isBordered max={3}>
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup>
            <h3 className="text-white text-3xl font-normal">
              {inView && <CountUp end={4.8} duration={2.5} decimals={1} />}+
            </h3>
          </div>
        </div>

        {/* second */}
        <div className="grid grid-cols-2 py-3 justify-center items-center">
          <div className="flex py-5 border-r border-white items-center justify-center">
            <TbStarsFilled className="w-28 text-white h-16" />
            <h3 className="text-white text-3xl font-normal">
              {inView && <CountUp end={100} duration={2.5} />}+
            </h3>
          </div>

          <div className="flex py-5 items-center justify-center">
            <FaStar className="w-20 text-white h-8" />
            <h3 className="text-white text-3xl font-normal">
              {inView && <CountUp end={10} duration={2.5} />}+
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
