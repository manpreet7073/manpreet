import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"; // Make sure the CSS file is linked

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1 className="glitch" data-text="404">404</h1>
        <h2 className="fade-in"> <strong>Oops! Page Not Found</strong> </h2>
        <p className="fade-in">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-home">Go Back Home</Link>
      </div>
    </div>
  );
}
