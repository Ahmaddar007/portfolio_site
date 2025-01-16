import React from "react";
import SideDrawer from "./Drawer";
import { Button } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[90%] py-2 rounded-full z-50 shadow-md fixed top-2 bg-blue-500">

      {/* Logo Section */}
      <div className="flex items-center">
        <Button className="text-white bg-transparent ml-4 focus:border-0 shadow-none text-2xl tracking-wide">Logo</Button>
      </div>

      {/* Placeholder for Menu */}
      <div className="flex space-x-6 text-white font-semibold">
        <p className="kalam_font text-3xl">Doraemon Collection</p>
      </div>

      {/* Drawer Menu */}
      <div>
        <SideDrawer />
      </div>

    </div>
  );
};

export default Header;
