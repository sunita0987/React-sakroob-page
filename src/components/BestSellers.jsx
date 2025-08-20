import { Link } from "react-router-dom";
import { PRODUCT_DATA } from "../utils/helper";
import React from "react";

export default function Home() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Bestsellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCT_DATA.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow-md text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 mx-auto object-contain bg-[#E5E4E2] hover:bg-[#EEF4FB]"
            />
            <h3 className="text-lg font-semibold mt-3 text-[#112D49]">
              {product.name}
            </h3>
            <p className="text-[#112D49] opacity-80">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-4 inline-block border-1 border-[#112D49] bg-[#ffffff] text-[#112D49] px-20 py-2 rounded-full hover:bg-[#112D49] hover:text-[#ffffff]"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
