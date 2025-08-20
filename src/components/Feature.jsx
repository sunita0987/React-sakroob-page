import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaTruck,
  FaUndoAlt,
  FaHeadset,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa";

const FeatureMarquee = () => {
  const features = [
    { icon: <FaTruck />, title: "EXPRESS Delivery", desc: "Order Now" },
    { icon: <FaUndoAlt />, title: "Easy Return", desc: "30 days return" },
    { icon: <FaHeadset />, title: "24/7 Support", desc: "Premium Services" },
    { icon: <FaShieldAlt />, title: "Premium Warranty", desc: "Up to 2 years" },
    { icon: <FaGift />, title: "Best Special Gift", desc: "For Order" },
  ];

  return (
    <div className="bg-[#73A4E01A] py-4 rounded-xl mt-10">
      <Marquee gradient={false} speed={100}>
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 border-r-1 border-[#112D49] "
          >
            <div className="text-[#73A4E0] text-2xl">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-[#000000]">{item.title}</h4>
              <p className="text-sm text-[#000000]">{item.desc}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeatureMarquee;
