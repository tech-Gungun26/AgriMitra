import React, { useState } from "react";

const DiseaseDetection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://localhost:7208/api/plant/detect-disease",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="home-wrapper">
      <div className="signup-card page-card weather-card">
        <div className="home-top">
          <h2>Plant Disease Detection</h2>
          <p className="home-sub">Upload a photo and get quick detection</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              className="file-input"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button className="signup-button" type="submit">Detect Disease</button>
        </form>

        {loading && <p className="home-sub">Analyzing image...</p>}

        {result && (
          <div className="weather-result">
            <h3>Disease: {result.disease}</h3>
            <p>{result.description}</p>
            <p><b>Prevention:</b> {result.prevention}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseDetection;
