import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TESTIMONIAL_DATA } from "../utils/helper";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIAL_DATA.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIAL_DATA.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center">
      <p className="text-[#112D49] italic font-light">Testimonials</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        What Our Client's Says
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-[#ffffff] hover:bg-[#112D49] hover:text-[#ffffff] text-[#112D49] p-3 rounded-full cursor-pointer border-1 border-[#112D49]"
        >
          <FaChevronLeft />
        </button>
        <div className="bg-[#ffffff] rounded-2xl shadow-md p-8 max-w-xl mx-auto transition duration-500">
          <img
            src={TESTIMONIAL_DATA[currentIndex].image}
            alt={TESTIMONIAL_DATA[currentIndex].name}
            className="w-20 h-20 mx-auto rounded-full"
          />
          <p className="text-[#112D49] opacity-80 mt-6">
            “{TESTIMONIAL_DATA[currentIndex].text}”
          </p>
          <div className="flex justify-center mt-4 text-yellow-400 text-xl">
            {"★★★★★"}
          </div>
          <h3 className="text-lg font-semibold mt-4 text-[#112D49]">
            {TESTIMONIAL_DATA[currentIndex].name}
          </h3>
          <p className="text-[#112D49] opacity-70">
            {TESTIMONIAL_DATA[currentIndex].role}
          </p>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-[#ffffff] hover:bg-[#112D49] hover:text-[#ffffff] text-[#112D49] p-3 rounded-full cursor-pointer border-1 border-[#112D49]"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
