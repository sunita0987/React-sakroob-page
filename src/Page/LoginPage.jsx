// function LoginPage({ setIsAuthenticated }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "test@gmail.com" && password === "123456") {
//       setIsAuthenticated(true);
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Welcome back!</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#112D49] text-[#FFFFFF] py-2 rounded-lg"
//           >
//             Log in
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-300">
//           Don't have an account?
//           <a href="#" className="text-[#112D49]">Create account</a>
//         </p>
//       </div>
//     </div>
//   );
// }
// export default LoginPage;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/dashboard"); // 
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Log in
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account? <span className="text-blue-600 cursor-pointer">Create account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
