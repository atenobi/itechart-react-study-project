import React, { useState, useEffect } from "react";

// functions
import {
  cardNumberVerify,
  dateVerify,
  nameVerify,
} from "../../js_functions/cardVerify/cardVerify";

// redux imports
import { useDispatch } from "react-redux";

// actions
import {
  setCardNum,
  setCardMonth,
  setCardYear,
  setOwnerName,
  setOwnerSurname,
} from "../../redux/actions";

// selectors
import {
  selectCardnum,
  selectCardMonth,
  selectCardYear,
  selectCardOwnerName,
  selectCardOwnerSurName,
} from "../../redux/selectors";

const CreditCard = () => {
  const dispatch = useDispatch();

  // selectors
  const cardNum = selectCardnum();
  const month = selectCardMonth();
  const year = selectCardYear();
  const name = selectCardOwnerName();
  const surName = selectCardOwnerSurName();

  // info icon
  const [infoIcon, setInfoIcon] = useState("");
  // card number
  const [userCardNum, setUserCardNum] = useState("");
  // card month
  const [userCardMonth, setUserCardMonth] = useState("");
  // card year
  const [userCardYear, setUserCardYear] = useState("");
  // card owner name
  const [userOwnerName, setUserOwnerName] = useState("");
  // card owner surname
  const [userOwnerSurName, setUserOwnerSurName] = useState("");

  // user inputs values
  const crdNumInput = (e) => setUserCardNum(e.target.value);
  const cardMonthInput = (e) => setUserCardMonth(e.target.value);
  const cardYearInput = (e) => setUserCardYear(e.target.value);
  const cardOwnerNameInput = (e) => setUserOwnerName(e.target.value);
  const cardOwnerSurNameInput = (e) => setUserOwnerSurName(e.target.value);

  // submit function
  const submitHandler = () => {
    setInfoIcon(null);

    // clear cerd info
    dispatch(setCardNum(""));
    dispatch(setCardMonth(""));
    dispatch(setCardYear(""));
    dispatch(setOwnerName(""));
    dispatch(setOwnerSurname(""));

    // number verifying
    cardNumberVerify(userCardNum).status
      ? dispatch(setCardNum(userCardNum))
      : setInfoIcon("Please, check you`r card number!!!");

    // date valid verifying
    if (dateVerify(userCardMonth, userCardYear).status) {
      dispatch(
        setCardMonth(dateVerify(userCardMonth, userCardYear).monthNumber)
      );
      dispatch(setCardYear(dateVerify(userCardMonth, userCardYear).yearNumber));
    } else {
      setInfoIcon("Please, check you`r card date!!!");
    }

    // name and surname verifying
    if (nameVerify(userOwnerName, userOwnerSurName).status) {
      dispatch(setOwnerName(userOwnerName.toUpperCase()));
      dispatch(setOwnerSurname(userOwnerSurName.toUpperCase()));
    } else {
      setInfoIcon("Please, check you`r name syntax!!!");
    }
  };

  useEffect(() => {}, []);

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

          <p className="credit-card_static-text width-100">{cardNum}</p>
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
          {month}/{year}
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

        <p className="credit-card_static-text width-50">{name}</p>
        <p className="credit-card_static-text width-50">{surName}</p>
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
