import bgimage from "../assets/images/loginbgimg.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div
      className="relative  min-h-screen bg-cover bg-no-repeat bg-center flex  justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#112D49]">
          Welcome back!
        </h2>
        <p className="text-[#112D49] text-sm text-center mb-10">
          Log in below to access your account and keep things running smoothly.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-none rounded-full focus:outline-none bg-[#F4F8F7] "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-none rounded-full focus:outline-none bg-[#F4F8F7] "
          />
          <div className="flex justify-end text-sm text-right  underline">
            <a href="#" className="text-[#112D49] ">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#112d49] text-[#ffffff] py-2 rounded-full cursor-pointer"
          >
            Log in
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-[#112d49] cursor-pointer font-bold underline"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
