import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"; // Ensure CSS file is linked

export default function NotFound() {
  const [apiResponse, setApiResponse] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8100/api/hello/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text(); // Handle plain text responses
        }
      })
      .then((data) => {
        setApiResponse(typeof data === "object" ? JSON.stringify(data) : data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="not-found-container">
      <div className="content">
        <h1 className="glitch" data-text="404">404</h1>
        <h2 className="fade-in">
          <strong>Oops! Page Not Found</strong>
        </h2>
        <p className="fade-in">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-home">Go Back Home</Link>

        {/* Show API response */}
        {apiResponse && <p className="fade-in">API Response: {apiResponse}</p>}
        {error && <p className="fade-in error">Error: {error}</p>}
      </div>
    </div>
  );
}
