import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Welcome to AgriMitra 🌱</h2>
      <p>You are logged in.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
