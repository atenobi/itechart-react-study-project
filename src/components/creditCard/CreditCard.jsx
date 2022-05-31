import React, { useState, useEffect } from "react";

// functions
import { cardNumberVerify } from "../../js_functions/cardVerify";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [userCardNum, setUserCardNum] = useState("");

  const crdNumInput = (e) => {
    setUserCardNum(e.target.value);
  };

  const submitHandler = () => {
    setCardNumber(null);

    cardNumberVerify(userCardNum).status
      ? setCardNumber(userCardNum)
      : cardNumberVerify(userCardNum).status;
  };

  useEffect(() => {
    setCardNumber(userCardNum);
    console.log(cardNumber);
  }, [cardNumber]);

  return (
    <div>
      <div className="credit-card-container">
        <h1 className="credit-card_bank-name">Your bank</h1>
        <input
          type="number"
          className="credit-card_card-number"
          placeholder="0000   0000   0000   0000"
          maxLength={16}
          minLength={16}
          onChange={(e) => crdNumInput(e)}
        />

        <p className="credit-card_valid-text">valid</p>

        <input
          type="number"
          className="credit-card_card-valid-month"
          placeholder="mm"
          min={1}
          max={12}
        />

        <p className="credit-card_valid-text">/</p>

        <input
          type="number"
          className="credit-card_card-valid-year"
          placeholder="yy"
        />

        <input
          type="text"
          className="credit-card_card-owner-name"
          placeholder="Name"
        />
        <input
          type="text"
          className="credit-card_card-owner-surname"
          placeholder="Surname"
        />
        <h1 className="credit-card_card-type">
          {cardNumberVerify(userCardNum).type}
        </h1>
      </div>
      <button
        type="submit"
        className="credit-card_submit-button"
        onClick={() => submitHandler()}
      >
        confirm
      </button>
    </div>
  );
};

export default CreditCard;
