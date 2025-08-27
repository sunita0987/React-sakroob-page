import React, { useState } from "react";
import bgimage from "../assets/images/loginbgimg.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative  min-h-screen bg-cover bg-no-repeat bg-center flex  justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-100 ">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#112D49]">Sign up</h2>
        <p className="text-gray-600 text-center mb-6">
          Create your account to unlock access and stay updated with everything
          we offer.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2  rounded-full bg-gray-100 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2  rounded-full bg-gray-100 focus:outline-none "
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2  rounded-full bg-gray-100 focus:outline-none "
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2  rounded-full bg-gray-100 focus:outline-none"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? " " : ""}
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#112D49] text-white rounded-full font-medium cursor-pointer transition"
          >
            Sign up
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already a member?
          <a
            href="/loginPage"
            className="text-[#112d49] font-medium underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
