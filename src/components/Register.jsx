import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimage from "../assets/images/loginbgimg.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ firstName, lastName, email, password })
      );
      alert("Account created successfully!");
      navigate("/LoginPage");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="bg-[#ffffff] shadow-lg rounded-2xl p-8 max-w-100">
        <h2 className="text-2xl font-bold text-center mb-2">Sign up</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create your account to unlock access and stay updated with everything
          we offer.
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 border-none rounded-full focus:outline-none bg-[#F4F8F7]"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 border-none rounded-full focus:outline-none bg-[#F4F8F7]"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border-none rounded-full focus:outline-none bg-[#F4F8F7]"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 pr-10 border-none rounded-full focus:outline-none bg-[#F4F8F7] w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3F566B]"
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#112D49] text-[#ffffff] py-2 rounded-full cursor-pointer"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already a member?
          <span
            onClick={() => navigate("/LoginPage")}
            className="text-[#112D49] underline font-bold cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
