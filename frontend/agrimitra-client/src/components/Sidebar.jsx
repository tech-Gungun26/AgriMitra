import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <h2 className="sidebar-brand">🌱 AgriMitra</h2>

      <div className="sidebar-links">
        <NavLink to="/home" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>Home</NavLink>
        <NavLink to="/weather" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>Weather</NavLink>
        <NavLink to="/disease-detection" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>Disease Detection</NavLink>
        <NavLink to="/chatbot" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>Chatbot</NavLink>
        <NavLink to="/account" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>Account</NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
