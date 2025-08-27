import React from "react";
import { useCart } from "../Context/AuthContext";

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-16 w-16 object-contain"
        />
        <div>
          <h2 className="font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">Dhs. {product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateQuantity(product.id, Math.max(1, product.quantity - 1))
          }
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="px-3">{product.quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, product.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold">
          Dhs. {(product.price * product.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:underline"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default CartItem;
