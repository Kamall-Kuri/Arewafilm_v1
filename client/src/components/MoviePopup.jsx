import "../css/MoviePopup.css";

function MoviePopup({ movie, onClose, onBuy }) {
  return (
    <div className="popup-overlay">
      <div className="movie-popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="popup-content">
          <div className="popup-image">
            <img src={movie.thumbnail} alt={movie.title} />
          </div>
          <div className="popup-details">
            <h2>{movie.title}</h2>
            <p>
              <strong>Fassarar:</strong> {movie.dubbed_by}
            </p>
            <p>
              <strong>Price:</strong> ₦{movie.price}
            </p>
            <p className="movie-description">{movie.description}</p>
            <div className="popup-buttons">
              <button className="buy-btn" onClick={onBuy}>
                Buy Now
              </button>
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePopup;
