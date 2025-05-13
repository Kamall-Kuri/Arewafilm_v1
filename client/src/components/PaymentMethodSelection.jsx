import { useState } from "react";
import "../css/PaymentMethodSelection.css";
import PaystackIcon from "../img/paystack-icon.png";
import FlutterwaveIcon from "../img/flutterwave-icon.png";

function PaymentMethodSelection({ movie, onCancel, onSelectMethod }) {
  const [selectedMethod, setSelectedMethod] = useState("paystack");

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleContinue = () => {
    onSelectMethod(selectedMethod);
  };

  return (
    <div className="popup-overlay">
      <div className="payment-method-container">
        <button className="close-btn" onClick={onCancel}>
          ×
        </button>
        <h2>Select Payment Method</h2>
        <div className="movie-summary">
          <img src={movie.thumbnail} alt={movie.title} />
          <div>
            <h3>
              {movie.title} {movie.dubbed_by}
            </h3>
            <p>Price: ₦{movie.price}</p>
          </div>
        </div>

        <div className="payment-methods">
          <div
            className={`payment-method ${
              selectedMethod === "paystack" ? "selected" : ""
            }`}
            onClick={() => handleMethodSelect("paystack")}
          >
            <img
              src={PaystackIcon}
              alt="paystack icon"
              className="payment-method-icon"
            />
            <div className="payment-method-details">
              <h3>Paystack</h3>
              <p>Pay with card, ussd, bank transfer</p>
            </div>
          </div>

          <div
            className={`payment-method ${
              selectedMethod === "flutterwave" ? "selected" : ""
            }`}
            onClick={() => handleMethodSelect("flutterwave")}
          >
            <img
              src={FlutterwaveIcon}
              alt="flutterwave icon"
              className="payment-method-icon"
            />
            <div className="payment-method-details">
              <h3>Flutterwave</h3>
              <p>Pay with card, ussd, bank transfer</p>
            </div>
          </div>
        </div>

        <div className="method-buttons">
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodSelection;
