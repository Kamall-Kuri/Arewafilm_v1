import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/DownloadPage.css";
import movieData from "../server/movies.json";

const DownloadPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movieData.find((m) => m.id === id);
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return (
      <div className="no-movie-container">
        <div className="no-movie-header">
          <h1>Movie Not Found</h1>
          <p>
            Please return to the <Link to="/">home page</Link> to select a
            movie.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="download-page">
      <main className="download-content">
        <h1>Download {movie.title}</h1>
        <div className="movie-details">
          <img src={movie.thumbnail} alt={movie.title} />
          <div className="details">
            <p>
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
              <strong>Fassarar:</strong> {movie.dubbed_by}
            </p>
            <p>
              <strong>File Size:</strong> {movie.file_size}
            </p>
          </div>
        </div>
        <div className="download-buttons">
          <Link to={movie.download_url} target="_blank">
            <button className="download-btn">DOWNLOAD NOW</button>
          </Link>
          
        </div>
        <div className="download-instructions">
          <h2>Download Instructions</h2>
          <ol>
            <li>Click on the DOWNLOAD NOW button.</li>
            <li>Wait for the download to complete.</li>
            <li>Enjoy your movie!</li>
          </ol>
        </div>
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </main>
    </div>
  );
};

export default DownloadPage;
