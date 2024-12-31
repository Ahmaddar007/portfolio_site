import { AlignJustify } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="shadow-custom flex justify-between items-center w-[90%] py-3 max-md:px-5 max-md:py-2 px-10 rounded-full z-10 shadow-md shadow-gray-400 fixed top-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800">
      {/* Logo Section */}
      <div className="flex items-center">
        <a className="text-white text-2xl tracking-wide">Logo</a>
      </div>

      {/* Placeholder for Menu */}
      <div className="hidden lg:flex space-x-6 text-white font-semibold">
        <a href="#home" className="hover:text-blue-200 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-blue-200 transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-blue-200 transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-blue-200 transition-colors">
          Contact
        </a>
      </div>

      {/* Drawer Menu for Mobile */}

      <div className="lg:hidden">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="flex justify-end items-center drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button hover:cursor-pointer text-white p-2 rounded-full"
            >
              <AlignJustify size={24} />
            </label>
          </div>

          {/* Sidebar Menu */}
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu bg-white text-gray-800 min-h-full w-80 p-6 space-y-4 shadow-lg">
              <li className="hover:bg-blue-100 rounded-md transition-colors">
                <a className="font-semibold text-lg">Sidebar Item 1</a>
              </li>
              <li className="hover:bg-blue-100 rounded-md transition-colors">
                <a className="font-semibold text-lg">Sidebar Item 2</a>
              </li>
              <li className="hover:bg-blue-100 rounded-md transition-colors">
                <a className="font-semibold text-lg">Sidebar Item 3</a>
              </li>
              <li className="hover:bg-blue-100 rounded-md transition-colors">
                <a className="font-semibold text-lg">Sidebar Item 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
