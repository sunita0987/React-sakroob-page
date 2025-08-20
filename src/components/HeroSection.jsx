import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SLIDES_DATA } from "../utils/helper";

const HeroSection = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay,]}
      pagination={{ clickable: true }}
      autoplay={{ delay:3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[500px] relative"
    >
      {SLIDES_DATA.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className="relative w-full h-[500px] flex items-center justify-center">
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover rounded-xl mt-10"
            />
            <div className="relative z-10 max-w-3xl px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2745] leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-[#112D49] opacity-80 text-sm sm:text-base md:text-sm">
                {slide.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-2 bg-[#112D49] text-[#ffffff] rounded-full shadow hover:bg-[#ffffff] hover:text-[#112D49] transition cursor-pointer">
                  Browse Products
                </button>
                <button className="px-6 py-2 border border-[#112D49] text-[#112D49] rounded-full hover:bg-[#112D49] hover:text-[#ffffff] cursor-pointer transition">
                  Starter Kits
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
