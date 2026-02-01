import { getUserFromToken, logout } from "../utils/auth";
import "../styles/pages.css";
import { useNavigate } from "react-router-dom";

function Account() {
  const user = getUserFromToken();
  const navigate = useNavigate();   // ✅ FIX

  const handleLogout = () => {
    logout();
    navigate("/");                  // ✅ WORKS NOW
  };

  if (!user) {
    return <p>Unable to load user data</p>;
  }

  return (
    <div className="home-wrapper">
      <div className="signup-card page-card">
        <h2>My Account 👤</h2>

        <p><strong>User ID:</strong> {user.userId}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>

        <button
          className="signup-button"
          style={{
            background: "#b00020",
            boxShadow: "0 6px 14px rgba(176,0,32,0.12)",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
