import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../utils/helper";
// import { POPULAR_DATA } from "../utils/helper";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCT_DATA.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black");

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    navigate("/cart", { state: { ...product, quantity, color } });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-100 object-contain mb-4 bg-[#EEF4FB] rounded-xl"
        />
        <div className="flex gap-5 ">
          <img
            src={product.image}
            alt=""
            className="h-20  p-2 rounded  bg-[#F5F5F5]"
          />
          <img
            src={product.image}
            alt=""
            className="h-20  p-2 rounded bg-[#F5F5F5]"
          />
          <img
            src={product.image}
            alt=""
            className="h-20  p-2 rounded bg-[#F5F5F5]"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-2">${product.price}</p>
        <p className="text-yellow-500 mb-4">★★★★★</p>
        <div className="mb-4">
          <p className="font-semibold mb-2">Select Color</p>
          <div className="flex gap-3">
            {["black", "green", "blue", "gray"].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === c ? "border-blue-600" : "border-gray-300"
                }`}
                style={{ backgroundColor: c }}
              ></button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <p className="font-semibold mb-2">Select Quantity</p>
          <div className="flex items-center border w-32 rounded-full justify-between ">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-1 cursor-pointer border-r-1 "
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 cursor-pointer border-l-1"
            >
              +
            </button>
          </div>
        </div>
        <button className=" cursor-pointer w-full py-3 mb-3 bg-[#112D49] text-[#FFFFFF] rounded-full hover:bg-[#FFFFFF] hover:border-[#112D49] border-1 hover:text-[#112D49] cursor-poonter">
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full py-3 border-1 rounded-full border-[#112D49] cursor-pointer text-[#112D49] hover:bg-[#112D49] hover:text-[#ffffff]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
