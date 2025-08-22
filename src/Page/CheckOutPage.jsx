import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import chair from "../assets/images/gamingchair.png";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";

    if (!paymentMethod) newErrors.payment = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Form submitted successfully!");
      console.log("Form Data:", form, "Payment:", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <div className="flex gap-4">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email or mobile number"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <button
              type="button"
              className="px-6 py-2 bg-gray-800 text-white rounded cursor-pointer"
            >
              Log in
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>
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
            {errors.payment && (
              <p className="text-red-500 text-sm mt-1">{errors.payment}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-50 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 cursor-pointer"
        >
          Place Order
        </button>
      </div>
      <div className=" bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={chair}
                alt="Gaming Chair"
                className="w-12 h-12 rounded-md"
              />
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-full">
                1
              </span>
            </div>
            <p className="font-medium">Gaming Chair</p>
          </div>
          <p className="font-semibold">AED 357.99</p>
        </div>
        <p className="text-sm text-blue-500 cursor-pointer">
          Have a coupon? Click here to enter your code
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon code"
            className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="px-4 py-2 bg-white border border-gray-400 rounded-xl text-sm font-medium hover:bg-gray-100">
            Apply Now
          </button>
        </div>
        <div className="space-y-1 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>AED 357.99</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>AED 20.00</span>
          </div>
        </div>
        <div className="flex items-center justify-between border rounded-xl px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇦🇪</span>
            <select className="bg-transparent text-sm focus:outline-none">
              <option>AED</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <FaExchangeAlt className="text-gray-500 text-lg" />

          <div className="flex items-center gap-2">
            <span className="text-2xl">🇮🇳</span>
            <select className="bg-transparent text-sm focus:outline-none">
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <button className="w-full py-3 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800">
          Convert
        </button>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span className="text-blue-700">AED 377.99</span>
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;
