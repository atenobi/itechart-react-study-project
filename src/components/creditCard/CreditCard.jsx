import React, { useState, useEffect } from "react";

// functions
import {
  cardNumberVerify,
  dateVerify,
  nameVerify,
} from "../../js_functions/cardVerify";

const CreditCard = () => {
  // info icon
  const [infoIcon, setInfoicon] = useState("");

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
    setInfoicon(null);
    setCardNumber(null);
    setCardMonth(null);
    setCardYear(null);
    setOwnerName(null);
    setOwnerSurName(null);

    // number verifying
    cardNumberVerify(userCardNum).status
      ? setCardNumber(userCardNum)
      : setInfoicon("Please, check you`r card number!!!");

    // date valid verifying
    if (dateVerify(userCardMonth, userCardYear).status) {
      setCardMonth(dateVerify(userCardMonth, userCardYear).monthNumber);
      setCardYear(dateVerify(userCardMonth, userCardYear).yearNumber);
    } else {
      setInfoicon("Please, check you`r card date!!!");
    }

    // name and surname verifying
    if (nameVerify(userOwnerName, userOwnerSurName).status) {
      setOwnerName(userOwnerName.toUpperCase());
      setOwnerSurName(userOwnerSurName.toUpperCase());
    } else {
      setInfoicon("Please, check you`r name syntax!!!");
    }
  };

  useEffect(() => {
    setCardNumber(userCardNum);
  }, [cardNumber, cardMonth, cardYear, ownerName, ownerSurName]);

  return (
    <div className="flex-column-center width-100">
      <p className="info-icon">{infoIcon}</p>
      <div className="credit-card-container">
        <h1 className="credit-card_bank-name">enter your card info</h1>
        <div>
          <input
            type="number"
            className="credit-card_card-number"
            // placeholder="0000   0000   0000   0000"
            placeholder="card number"
            maxLength={16}
            minLength={13}
            onChange={(e) => crdNumInput(e)}
          />

          <p className="credit-card_static-text width-100">{cardNumber}</p>
        </div>

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

        <p className="credit-card_static-text width-50">{ownerName}</p>
        <p className="credit-card_static-text width-50">{ownerSurName}</p>
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
