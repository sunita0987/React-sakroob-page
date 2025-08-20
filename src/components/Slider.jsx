import React from "react";
import Marquee from "react-fast-marquee";
import { FaGamepad, FaHdd, FaTv, FaClock, FaDesktop } from "react-icons/fa";
import { MdMemory } from "react-icons/md";

const categories = [
  { icon: <FaGamepad />, label: "Game" },
  { icon: <FaHdd />, label: "Storage (SSD)" },
  { icon: <MdMemory />, label: "Graphic Card" },
  { icon: <FaTv />, label: "Televisions" },
  { icon: <FaClock />, label: "Smartwatch" },
  { icon: <FaDesktop />, label: "Monitors" },
];

const Slider = () => {
  return (
    <div className="w-full  py-4">
      <Marquee gradient={false} speed={100} pauseOnHover={true}>
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center  justify-center  bg-white rounded-xl  px-10 py-1 mx-3 max-w-[300px] shadow-md text-center hover:scale-105 transition-transform"
          >
            <div className="bg-[#112D49] text-white text-3xl p-4 rounded-full mb-2 ">
              {cat.icon}
            </div>
            <p className="text-sm  font-medium text-gray-800">{cat.label}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
