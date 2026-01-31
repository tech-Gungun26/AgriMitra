import { getUserFromToken } from "../utils/auth";
import "../styles/pages.css";
function Account() {
  const user = getUserFromToken();

  if (!user) {
    return <p>Unable to load user data</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Account 👤</h2>

      <p><strong>User ID:</strong> {user.userId}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default Account;
