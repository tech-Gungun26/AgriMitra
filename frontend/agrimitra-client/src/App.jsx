import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";
import Chatbot from "./pages/Chatbot";
import "./styles/theme.css";
import "./styles/layout.css";
import Sidebar from "./components/Sidebar";
import Weather from "./pages/Weather";
import DiseaseDetection from "./pages/DiseaseDetection";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
            <div className="app-layout">
        <Sidebar />
        <div className="main-content">
              <Home />
              </div>
              </div>
            </PrivateRoute>
          }
        />

        <Route
          path="/account"
          element={
            <PrivateRoute>
            <div className="app-layout">
        <Sidebar />
        <div className="main-content">
              <Account />
              </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route
  path="/chatbot"
  element={
    <PrivateRoute>
    <div className="app-layout">
        <Sidebar />
        <div className="main-content">
      <Chatbot />
      </div>
      </div>
    </PrivateRoute>
  }
/>
<Route
  path="/weather"
  element={
    <PrivateRoute>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Weather />
        </div>
      </div>
    </PrivateRoute>
  }
/>
<Route path="/disease-detection" element={<DiseaseDetection />} />

      </Routes>

      

    </BrowserRouter>
  );
}

export default App;
