export const cardNumberVerify = (cardNum) => {
  const cardValues = {
    type: "unknown",
    status: false,
  };
  const visaRE = /^4[0-9]{12}(?:[0-9]{3})?/gm;
  const masterCardRE = /^5[1-5][0-9]{14}/gm;
  const americanExpressRE = /^3[47][0-9]{13}/gm;

  if (cardNum.match(visaRE) && cardNum.toString().length === 16) {
    cardValues.type = "visa";
    cardValues.status = true;
  } else if (cardNum.match(masterCardRE) && cardNum.toString().length === 16) {
    cardValues.type = "Master Card";
    cardValues.status = true;
  } else if (cardNum.match(americanExpressRE) && cardNum.toString().length === 15) {
    cardValues.type = "American Express";
    cardValues.status = true;
  } else {
    cardValues.type = "unknown";
    cardValues.status = false;
  }

  return cardValues;
};
