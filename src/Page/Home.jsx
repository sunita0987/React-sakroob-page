import React from "react";
import ProductCard from "../components/BestSellers";
import { PRODUCT_DATA } from "../utils/helper";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCT_DATA.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
