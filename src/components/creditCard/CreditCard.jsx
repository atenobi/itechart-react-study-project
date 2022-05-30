import React from "react";

const CreditCard = () => {
  const submitHandler = () => {
    console.log("submit test");
  };

  return (
    <div>
      <div className="credit-card-container">
        <h1 className="credit-card_bank-name">Your bank</h1>
        <input
          type="number"
          placeholder="0000 0000 0000 0000"
          className="credit-card_card-number"
        />

        <p className="credit-card_valid-text">valid</p>

        <input
          type="number"
          placeholder="mm"
          className="credit-card_card-valid-month"
        />
        <p className="credit-card_valid-text">/</p>
        <input
          type="number"
          placeholder="yy"
          className="credit-card_card-valid-year"
        />

        <input
          type="text"
          placeholder="Name"
          className="credit-card_card-owner-name"
        />
        <input
          type="text"
          placeholder="Surname"
          className="credit-card_card-owner-surname"
        />
        <h1 className="credit-card_card-type">card-type</h1>
      </div>
      <button
        className="credit-card_submit-button"
        type="submit"
        onClick={() => submitHandler()}
      >
        confirm
      </button>
    </div>
  );
};

export default CreditCard;
