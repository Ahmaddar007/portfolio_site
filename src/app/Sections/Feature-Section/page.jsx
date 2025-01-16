import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";
import { FaStar } from "react-icons/fa"; // Example icons
import { TbStarsFilled } from "react-icons/tb";


const Features = () => {
  return (
    <div className="w-full relative bottom-28 px-6 md:px-[10%] py-12">
      <div className="w-full grid grid-cols-2 bg-blue-500 rounded-lg shadow-xl">
        {/* first */}
        <div className="py-3">
          <div className="flex gap-8 py-5 border-r border-white justify-center items-center">
            <AvatarGroup isBordered max={3} >
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup>
            <h3 className="text-white text-3xl font-normal">4.8+</h3>
          </div>
        </div>

        {/* second */}
        <div className="grid grid-cols-2 py-3 justify-center items-center">
          <div className="flex py-5 border-r border-white items-center justify-center">
            <TbStarsFilled className="w-28 text-white h-16" />
            <h3 className="text-white text-3xl font-normal">100+</h3>
          </div>

          <div className="flex py-5 items-center justify-center">
          <FaStar className="w-20 text-white h-8" />
            <h3 className="text-white text-3xl font-normal">10+</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
