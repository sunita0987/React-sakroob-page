import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimage from "../assets/images/loginbgimg.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setIsAuthenticated(true);
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid candidate!");
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
        <h2 className="text-2xl font-bold text-center mb-4 text-[#112D49]">
          Welcome back!
        </h2>
        <p className="text-[#112D49] text-sm text-center mb-10 ">
          Log in below to access your account and keep things running smoothly.
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full px-4 py-2 border-none rounded-full focus:outline-none bg-[#F4F8F7]"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border-none rounded-full focus:outline-none bg-[#F4F8F7]"
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
          <a
            href="#"
            className="text-[#112d49] font-bold flex justify-end underline"
          >
            Forgot Password
          </a>
          <button
            type="submit"
            className="bg-[#112D49] text-[#ffffff] py-2 rounded-full cursor-pointer"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-[#112D49] font-light">
          Don't have an account?
          <span
            onClick={() => navigate("/Register")}
            className="text-[#112D49] cursor-pointer font-bold underline"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
