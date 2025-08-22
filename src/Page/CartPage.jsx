import React, { useState } from "react";
import { Link } from "react-router-dom";
import gamingchair from "../assets/images/gbluegaming.png";
import game from "../assets/images/camera.png";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Gaming Chair",
      price: 249.99,
      image: gamingchair,
      quantity: 1,
    },
    {
      id: 2,
      title: "Gaming Peripherals",
      price: 449.99,
      image: game,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#112D49]">Your cart</h1>

      <div className="bg-[#F4F8F7]  rounded-xl max-w-full">
        <div className="grid grid-cols-3 md:grid-cols-4 items-center font-semibold border-b px-6 py-3">
          <p>Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Total</p>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 md:grid-cols-4 items-center border-b px-6 py-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className=" rounded" />
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p className="text-sm text-gray-500">Dhs. {item.price}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded cursor-pointer "
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 text-red-500 hover:underline cursor-pointer"
              >
                🗑
              </button>
            </div>
            <div className="text-right font-semibold">
              Dhs. {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-[#112D49] hover:underline mb-4 md:mb-0">
          Continue Shopping
        </Link>

        <div className="text-right">
          <p className="font-semibold">
            Estimated Total: Dhs. {total.toFixed(2)} AED
          </p>
          <p className="text-sm text-gray-500">
            Taxes, discounts and shipping calculated at checkout.
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full py-3 border-1 rounded-full bg-[#112D49] cursor-pointer text-[#ffffff] hover:bg-[#ffffff] hover:text-[#112D49]"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
