import React from "react";

import "../css/MovieCard.css";

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card">
      <div className="movie-thumnail" onClick={onClick}>
        <img src={movie.thumbnail}  alt="" />
      </div>
      <div className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
          <h6 className="dub-company">Fassarar: {movie.dubbed_by}</h6>
          <div className="movie-btn">
            <div className="movie-price">₦ {movie.price}</div>
            <button
              className="movie-download"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Download
            </button>
          </div>
      </div>
    </div>
  );
}

export default MovieCard;
