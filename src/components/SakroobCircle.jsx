import React from "react";
import bgImage from "../assets/images/empty-chair.jpg";

const SakroobCircle = () => {
  return (
    <div className="relative p-4 sm:p-6 md:p-8 min-h-[240px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[386px]">
      <div
        className="relative -bottom-10 md:-bottom-[80px] lg:-bottom-[141px] rounded-[24px]  bg-cover bg-no-repeat bg-center min-h-[386px] w-[1140px] left-1/2 -translate-x-1/2 flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#73A4E0] opacity-[70%] z-0 rounded-[24px]" />

        <div className="relative max-w-3xl mx-auto py-16 px-6 text-center text-[#ffffff]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join the Sakroob Circle
          </h2>
          <p className="text-lg mb-8">
            Exclusive drops, early access, and maker tips in your inbox.
          </p>

          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-white py-[13.35px] sm:py-[22px] px-[18px] rounded-[50px] max-w-[489px] w-full leading-[140%] text-[#8392A0] border border-transparent focus:outline-none focus:border-blue-500"
            />
            <button className="!py-[16px] !px-[20px] min-[425px] sm:absolute right-20 bg-[#112D49] rounded-full top-49 text-white max-sm:w-full max-sm:mt-4 hover:text-[#112D49] hover:bg-white cursor-pointer">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SakroobCircle;
