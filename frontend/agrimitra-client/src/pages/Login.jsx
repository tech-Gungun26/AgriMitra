import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

      const token = response.data.token;

      localStorage.setItem("token", token);

      alert("Login successful");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>AgriMitra Login 🌱</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
<p>
  Don’t have an account? <a href="/signup">Signup</a>
</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    
  );
}



export default Login;
