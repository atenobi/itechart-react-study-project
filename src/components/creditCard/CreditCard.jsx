import React, { useState, useEffect } from "react";

// functions
import {
  cardNumberVerify,
  dateVerify,
  nameVerify,
} from "../../js_functions/cardVerify";

const CreditCard = () => {
  // card number
  const [cardNumber, setCardNumber] = useState("");
  const [userCardNum, setUserCardNum] = useState("");

  // card month
  const [cardMonth, setCardMonth] = useState("");
  const [userCardMonth, setUserCardMonth] = useState("");

  // card year
  const [cardYear, setCardYear] = useState("");
  const [userCardYear, setUserCardYear] = useState("");

  // card owner name
  const [ownerName, setOwnerName] = useState("");
  const [userOwnerName, setUserOwnerName] = useState("");

  // card owner surname
  const [ownerSurName, setOwnerSurName] = useState("");
  const [userOwnerSurName, setUserOwnerSurName] = useState("");

  // user inputs values
  const crdNumInput = (e) => setUserCardNum(e.target.value);
  const cardMonthInput = (e) => setUserCardMonth(e.target.value);
  const cardYearInput = (e) => setUserCardYear(e.target.value);
  const cardOwnerNameInput = (e) => setUserOwnerName(e.target.value);
  const cardOwnerSurNameInput = (e) => setUserOwnerSurName(e.target.value);

  // submit function
  const submitHandler = () => {
    setCardNumber(null);
    setCardMonth(null);
    setCardYear(null);
    setOwnerName(null);
    setOwnerSurName(null);

    // number verifying
    cardNumberVerify(userCardNum).status
      ? setCardNumber(userCardNum)
      : cardNumberVerify(userCardNum).status;

    // date valid verifying
    if (dateVerify(userCardMonth, userCardYear).status) {
      setCardMonth(dateVerify(userCardMonth, userCardYear).monthNumber);
      setCardYear(dateVerify(userCardMonth, userCardYear).yearNumber);
    } else {
      setCardMonth("?");
      setCardYear("?");
      // throw new Error("Something wrong with your card date! Check it, please!");
    }
    if (nameVerify(userOwnerName, userOwnerSurName).status) {
      setOwnerName(userOwnerName.toUpperCase());
      setOwnerSurName(userOwnerSurName.toUpperCase());
    } else {
      setOwnerName("?");
      setOwnerSurName("?");
      // throw new Error("Something wrong with owner name! Check it, please!");
    }
  };

  useEffect(() => {
    setCardNumber(userCardNum);
  }, [cardNumber, cardMonth, cardYear, ownerName, ownerSurName]);

  return (
    <div>
      <div className="credit-card-container">
        <h1 className="credit-card_bank-name">enter your card info</h1>
        <input
          type="number"
          className="credit-card_card-number"
          // placeholder="0000   0000   0000   0000"
          placeholder="card number"
          maxLength={16}
          minLength={13}
          onChange={(e) => crdNumInput(e)}
        />

        <p className="credit-card_little-text">valid until</p>

        <input
          type="number"
          className="credit-card_card-valid-month"
          placeholder="month"
          min={1}
          max={12}
          onChange={(e) => cardMonthInput(e)}
        />

        <p className="credit-card_static-text">
          {cardMonth}/{cardYear}
        </p>

        <input
          type="number"
          className="credit-card_card-valid-year"
          placeholder="year"
          onChange={(e) => cardYearInput(e)}
        />

        <input
          type="text"
          className="credit-card_card-owner-name"
          placeholder="Name"
          onChange={(e) => {
            cardOwnerNameInput(e);
          }}
        />

        <input
          type="text"
          className="credit-card_card-owner-surname"
          placeholder="Surname"
          onChange={(e) => {
            cardOwnerSurNameInput(e);
          }}
        />
        <h1 className="credit-card_card-type">
          {cardNumberVerify(userCardNum).type}
        </h1>

        <p className="credit-card_static-text">{ownerName}</p>
        <p className="credit-card_static-text">{ownerSurName}</p>
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
