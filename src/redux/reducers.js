import {
  SET_CARD_NUMBER,
  SET_CARD_MONTH,
  SET_CARD_YEAR,
  SET_CARD_OWNER_NAME,
  SET_CARD_OWNER_SURNAME,
} from "./actionTypes";

const defaultState = {
  cardNum: "",
  cardMonth: "",
  cardYear: "",
  ownerName: "",
  ownerSurname: "",
};

export default function userCardReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARD_NUMBER:
      return {
        ...state,
        cardNum: action.payload,
      };
    case SET_CARD_MONTH:
      return {
        ...state,
        cardMonth: action.payload,
      };
    case SET_CARD_YEAR:
      return {
        ...state,
        cardYear: action.payload,
      };
    case SET_CARD_OWNER_NAME:
      return {
        ...state,
        ownerName: action.payload,
      };
    case SET_CARD_OWNER_SURNAME:
      return {
        ...state,
        ownerSurname: action.payload,
      };

    default:
      return state;
  }
}
