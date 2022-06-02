export const cardNumberVerify = (cardNum) => {
  const cardValues = {
    type: "unknown",
    status: false,
  };
  const visaRE = /^4[0-9]{12}(?:[0-9]{3})?/gm;
  const masterCardRE = /^5[1-5][0-9]{14}/gm;
  const americanExpressRE = /^3[47][0-9]{13}/gm;

  if (cardNum.match(visaRE) && cardNum.toString().length === 16) {
    cardValues.type = "VISA";
    cardValues.status = true;
  } else if (cardNum.match(masterCardRE) && cardNum.toString().length === 16) {
    cardValues.type = "Master Card";
    cardValues.status = true;
  } else if (
    cardNum.match(americanExpressRE) &&
    cardNum.toString().length === 15
  ) {
    cardValues.type = "American Express";
    cardValues.status = true;
  } else {
    cardValues.type = "unknown";
    cardValues.status = false;
  }

  return cardValues;
};


// function for date checking
export const dateVerify = (month, year) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getYear() - 100;

  const dateValues = {
    monthNumber: "",
    yearNumber: '',
    status: false,
  };

  if (month > 0 && month <= 12) {
    dateValues.monthNumber = month;
    dateValues.status = true;
  } else {
    dateValues.monthNumber = " ";
    dateValues.status = false;
  }

  if (year === currentYear && month < currentMonth) {
    dateValues.monthNumber = " ";
    dateValues.status = false;
  }
 
  if (year >= currentYear) {
    dateValues.yearNumber = year;
    dateValues.status = true;
  } else {
    dateValues.yearNumber = '';
    dateValues.status = false;
  }
  return dateValues;
};

// function for name checking
export const nameVerify = (name, surname) => {
  const nameValues = {
    nameVal: "",
    surnameVal: "",
    status: false,
  };

if (name.match(/^[a-z]+/ui) && surname.match(/^[a-z]+/ui)) {
  nameValues.nameVal = name;
  nameValues.surnameVal = surname;
  nameValues.status = true;
} else {
  nameValues.nameVal = '';
  nameValues.surnameVal = '';
  nameValues.status = false;
}

  return nameValues;
}