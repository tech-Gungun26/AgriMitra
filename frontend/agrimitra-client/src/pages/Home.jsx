import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";
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

    <p>
  <a href="/weather">Weather</a> |{" "}
  <a href="/chatbot">Chatbot</a> |{" "}
  <a href="/account">Account</a>
</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
