import React, { useState, useEffect } from "react";
import movies from "../server/movies.json";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import "../css/MovieGrid.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import MoviePopup from "./MoviePopup";
import PaymentMethodSelection from "./PaymentMethodSelection";
import PaymentForm from "./PaymentForm";

function MovieGrid() {
  const [selectedDub, setSelectedDub] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showPaymentMethodSelection, setShowPaymentMethodSelection] =
    useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigate = useNavigate();
  const { searchQuery } = useOutletContext(); // Get search query

  const moviesPerPage = 8;

  // Filter movies by dub + search query
  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMovies =
    selectedDub === "All"
      ? searchedMovies
      : searchedMovies.filter((movie) => movie.dubbed_by === selectedDub);

  // Pagination logic
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedDub]);

  useEffect(() => {
    setCurrentPage(1);
    if (searchQuery.trim() !== "") {
      setSelectedDub("All");
    }
  }, [searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowPaymentForm(false);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
    setShowPaymentForm(false);
    setShowPaymentMethodSelection(false);
    setSelectedPaymentMethod(null);
  };

  const handleBuyClick = () => {
    setShowPaymentMethodSelection(true);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentMethodSelection(false);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (paymentDetails) => {
    console.log("Payment processed:", paymentDetails);
    navigate(`/download/${selectedMovie.id}`);
  };

  return (
    <>
      <Navbar selectedDub={selectedDub} setSelectedDub={setSelectedDub} />
      <div className="movie-cards">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
            />
          ))
        ) : (
          <div className="no-movies-found">🎬 No movies found</div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {selectedMovie &&
        (showPaymentForm ? (
          <PaymentForm
            movie={selectedMovie}
            paymentMethod={selectedPaymentMethod}
            onCancel={handleClosePopup}
            onSubmit={handlePaymentSubmit}
          />
        ) : showPaymentMethodSelection ? (
          <PaymentMethodSelection
            movie={selectedMovie}
            onCancel={handleClosePopup}
            onSelectMethod={handleSelectPaymentMethod}
          />
        ) : (
          <MoviePopup
            movie={selectedMovie}
            onClose={handleClosePopup}
            onBuy={handleBuyClick}
          />
        ))}
    </>
  );
}

export default MovieGrid;
