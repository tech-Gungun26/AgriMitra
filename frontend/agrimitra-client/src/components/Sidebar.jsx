import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌱 AgriMitra</h2>
      <Link to="/home">Home</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/chatbot">Chatbot</Link>
      <Link to="/account">Account</Link>
    </div>
  );
}

export default Sidebar;
