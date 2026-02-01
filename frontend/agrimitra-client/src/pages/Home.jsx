import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Home() {
  const navigate = useNavigate();

 
  return (
    <div className="home-wrapper">
      <div className="signup-card page-card">
        <div className="home-top">
          <h2>Welcome to AgriMitra 🌱</h2>
          <p className="home-sub">Choose an action below to get started</p>
        </div>

        <div className="home-grid">
          <div className="home-card page-card" onClick={() => navigate('/weather')} role="button">
            <div className="card-title">Weather</div>
            <div className="card-desc">Get local weather and forecasts</div>
          </div>

          <div className="home-card page-card" onClick={() => navigate('/disease-detection')} role="button">
            <div className="card-title">Disease Detection</div>
            <div className="card-desc">Upload an image to detect plant disease</div>
          </div>

          <div className="home-card page-card" onClick={() => navigate('/chatbot')} role="button">
            <div className="card-title">Chatbot</div>
            <div className="card-desc">Ask farming questions and get suggestions</div>
          </div>

          <div className="home-card page-card" onClick={() => navigate('/account')} role="button">
            <div className="card-title">Account</div>
            <div className="card-desc">View or edit your profile</div>
          </div>
        </div>

       
          
          
      </div>
    </div>
  );
}

export default Home; 
