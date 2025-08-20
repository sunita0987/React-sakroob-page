import React from "react";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="w-full bg-[#F1F6FC] px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <h1 className="text-[#112D49] text-xl font-semibold tracking-wide">
          Sakroob
        </h1>
      </div>
      <div className="w-full sm:w-[400px] md:w-[500px] relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full px-4 py-2   border border-[#112D491A] shadow-sm focus:ring-2 focus:ring-[#112D49] outline-none"
        />
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </nav>
  );
};

export default Navbar;
