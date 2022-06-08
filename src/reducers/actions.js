import {
    SET_CARD_NUMBER,
    SET_CARD_MONTH,
    SET_CARD_YEAR,
    SET_CARD_OWNER_NAME,
    SET_CARD_OWNER_SURNAME,
  } from "./actionTypes";

export const setCardNum = (cardNum) => ({
  type: SET_CARD_NUMBER,
  payload: cardNum,
});

export const setCardMonth = (cardMonth) => ({
  type: SET_CARD_MONTH,
  payload: cardMonth,
});

export const setCardYear = (cardYear) => ({
  type: SET_CARD_YEAR,
  payload: cardYear,
});

export const setOwnerName = (ownerName) => ({
  type: SET_CARD_OWNER_NAME,
  payload: ownerName,
});

export const setOwnerSurname = (ownerSurname) => ({
  type: SET_CARD_OWNER_SURNAME,
  payload: ownerSurname,
});
