import React, { useState } from "react";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email or mobile number"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
            <button className="px-6 py-2 bg-gray-800 text-white rounded cursor-pointer">
              Log in
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mb-4"
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Save this information for next time
          </label>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
          <div className="flex justify-between items-center border rounded px-4 py-2">
            <p>Standard (Example)</p>
            <p className="font-medium">AED 20.00</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Payment</h2>
          <p className="text-sm text-gray-500 mb-4">
            All transactions are secure and encrypted.
          </p>
          <div className="space-y-4">
            <label className="flex items-center gap-2 border rounded px-4 py-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
            <label className="flex items-center gap-2 border rounded px-4 py-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit Card / Debit Card
            </label>
            {paymentMethod === "card" && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="col-span-2 border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="col-span-2 border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border rounded px-4 py-2"
                />
              </div>
            )}
            <label className="flex items-center gap-2 border rounded px-4 py-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
              />
              Bank Transfer
            </label>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] shadow rounded-lg p-6 space-y-6">
        <div className="flex gap-4 items-center">
          <img
            src="https://via.placeholder.com/80x80?text=Chair"
            alt="product"
            className="w-16 h-16 rounded"
          />
          <div>
            <h3 className="font-medium">Gaming Chair</h3>
            <p className="text-sm text-gray-500">AED 357.99</p>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-full border rounded px-3 py-2"
          />
          <button className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer">
            Apply
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>AED 357.99</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>AED 20.00</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>AED 377.99</p>
          </div>
        </div>
        <button className="w-full py-3 bg-blue-700 text-white rounded hover:bg-blue-800 cursor-pointer">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
