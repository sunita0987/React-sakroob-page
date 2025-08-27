import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard 🎉</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
