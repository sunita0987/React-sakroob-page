import React from "react";
import { CATEGORY_DATA } from "../utils/helper";

const Categories = () => {
  return (
    <section className="py-10 px-5">
      <h2 className="text-center text-xl text-gray-500 italic">
        Featured Categories
      </h2>
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Shop Our Most Popular Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CATEGORY_DATA.map((cat, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-5 flex flex-col items-center justify-center ${cat.bg}`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-32 w-auto object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
