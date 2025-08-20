import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { MENU_ITEMS } from "../utils/helper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#112D49] text-[#ffffff] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            {MENU_ITEMS.map((item, idx) => (
              <div key={idx} className="relative group flex items-center">
                <a
                  href={item.link}
                  className="hover:text-blue-400 flex items-center"
                >
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.dropdown.map((sub, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <FaUser className="cursor-pointer hover:text-blue-400" />
              <FaHeart className="cursor-pointer hover:text-blue-400" />
              <FaShoppingCart className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0f2745] text-white px-4 pb-4 space-y-3">
          {MENU_ITEMS.map((item, idx) => (
            <div key={idx} className="border-b border-gray-600 pb-2">
              <a
                href={item.link}
                className="block hover:text-blue-400 flex items-center"
              >
                {item.name}
                {item.dropdown && <FaChevronDown className="ml-1 text-sm" />}
              </a>
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.dropdown.map((sub, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-sm hover:text-blue-300"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex space-x-4 mt-4">
            <FaUser className="cursor-pointer hover:text-blue-400" />
            <FaHeart className="cursor-pointer hover:text-blue-400" />
            <FaShoppingCart className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
