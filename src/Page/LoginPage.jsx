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



