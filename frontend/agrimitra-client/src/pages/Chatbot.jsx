import "../styles/pages.css";

function Chatbot() {
  return (
    <div className="home-wrapper">
      <div className="signup-card page-card">
        <div className="home-top">
          <h2>AgriMitra AI Assistant 🤖</h2>
          <p className="home-sub">Ask questions related to farming, crops, weather, and agriculture.</p>
        </div>

        <iframe
          className="chatbot-iframe"
          src="https://www.chatbase.co/chatbot-iframe/NIamE6SYZJd_BE3A5SiBo?embed=true"
          title="AgriMitra Chatbot"
        />
      </div>
    </div>
  );
}

export default Chatbot;


