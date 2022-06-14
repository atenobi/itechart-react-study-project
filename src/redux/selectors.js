import { useSelector } from "react-redux";

export const selectCardnum = () =>
  useSelector((state) => state.userCard.cardNum);

export const selectCardMonth = () =>
  useSelector((state) => state.userCard.cardMonth);

export const selectCardYear = () =>
  useSelector((state) => state.userCard.cardYear);

export const selectCardOwnerName = () =>
  useSelector((state) => state.userCard.ownerName);

export const selectCardOwnerSurName = () =>
  useSelector((state) => state.userCard.ownerSurname);

