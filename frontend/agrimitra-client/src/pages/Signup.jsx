import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("https://localhost:7208/api/Auth/register", {
        fullName,
        email,
        password,
      });

      alert("Signup successful. Please login.");
      navigate("/");
    } catch (err) {
      setError("Signup failed. Email may already exist.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card page-card">
        <h2 className="signup-title">AgriMitra Signup 🌱</h2>

        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">Signup</button>
        </form>

        {error && <p className="signup-error">{error}</p>}
      </div>
    </div>
  );
}

export default Signup;
