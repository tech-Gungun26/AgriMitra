export default Chatbot;

function Chatbot() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>AgriMitra AI Assistant 🤖</h2>
      <p>
        Ask questions related to farming, crops, weather, and agriculture.
      </p>

      <iframe
        src="https://www.chatbase.co/chatbot-iframe/NIamE6SYZJd_BE3A5SiBo?embed=true"
        width="100%"
        height="600"
        style={{
          border: "none",
          borderRadius: "10px"
        }}
        title="AgriMitra Chatbot"
      />
    </div>
  );
}


