import { useState } from "react";
import "../css/PaymentForm.css";

function PaymentForm({ movie, paymentMethod, onCancel, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className="popup-overlay">
      <div className="payment-form-container">
        <button className="close-btn" onClick={onCancel}>
          ×
        </button>
        <h2>Payment Details</h2>
        <div className="movie-summary">
          <img src={movie.thumbnail} alt={movie.title} />
          <div>
            <h3>{movie.title}</h3>
            <p>Price: ${movie.price}</p>
          </div>
        </div>
        <div className="selected-payment-method">
          <p>
            Payment Method:{" "}
            {paymentMethod === "paystack" ? "Paystack" : "Flutterwave"}
          </p>
        </div>
        <form>
          <div className="form-buttons">
            <button onClick={handleSubmit} className="submit-btn">
              Pay ₦{movie.price}
            </button>
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
