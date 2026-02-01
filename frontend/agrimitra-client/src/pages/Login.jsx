import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://localhost:7208/api/Auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login response:", response.data);

      // ✅ IMPORTANT CHECK
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        setError("Login failed: token not received");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card page-card">
        <h2 className="signup-title">AgriMitra Login 🌱</h2>

        <form onSubmit={handleLogin} className="signup-form">
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

          <button type="submit" className="signup-button">Login</button>
        </form>

        {error && <p className="signup-error">{error}</p>}

        <p className="auth-footer">
          Don’t have an account? <a className="auth-link" href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
