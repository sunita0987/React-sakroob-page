import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-[#ffffff] shadow-md rounded-2xl p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain bg-[#E5E4E2] hover:bg-[#EEF4FB] cursor-pointer" />
      <h3 className="text-lg font-semibold mt-3 text-[#112D49]">{product.title}</h3>
      <p className="text-[#112D49] opacity-80 text-sm">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        onClick={handleShopNow}
        className="mt-4 px-5 py-2 hover:text-[#ffffff]  text-[#112D49] rounded-full border-1 border-[#112D49]  hover:bg-[#112D49] transition cursor-pointer"
      >
        Shop Now
      </button>
    </div>
  );
};

export default ProductCard;
