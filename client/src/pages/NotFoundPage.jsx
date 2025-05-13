import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFoundPage.css";
function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! The page you’re looking for doesn't exist.</p>
        <Link to="/" className="back-home-btn">
          🎬 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
