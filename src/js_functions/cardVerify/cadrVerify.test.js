import { cardNumberVerify, dateVerify, nameVerify } from "./cardVerify";

// card number
describe("card number JS func test", () => {
  test("true results", () => {
    expect(cardNumberVerify("4112321231231231")).toEqual({
      status: true,
      type: "VISA",
    });
    expect(cardNumberVerify("5112321231231231")).toEqual({
      status: true,
      type: "Master Card",
    });
    expect(cardNumberVerify("347993431231231")).toEqual({
      status: true,
      type: "American Express",
    });
  });

  test("false results", () => {
    expect(cardNumberVerify("411232123123123")).toEqual({
      status: false,
      type: "unknown",
    });
    expect(cardNumberVerify("511232123123123")).toEqual({
      status: false,
      type: "unknown",
    });
    expect(cardNumberVerify("34799343123123")).toEqual({
      status: false,
      type: "unknown",
    });
  });
});

// date
describe("card date JS func test", () => {
  test("true results", () => {
    expect(dateVerify("1", "23")).toEqual({
      status: true,
      monthNumber: "1",
      yearNumber: "23",
    });
    expect(dateVerify("3", "25")).toEqual({
      status: true,
      monthNumber: "3",
      yearNumber: "25",
    });
  });

  test("false results", () => {
    expect(dateVerify("13", "21")).toEqual({
      status: false,
      monthNumber: "",
      yearNumber: "",
    });
  });
});

// name and surname
describe("card name and surname JS func test", () => {
  test("true results", () => {
    expect(nameVerify("Max", "Shyshko")).toEqual({
      status: true,
      nameVal: "Max",
      surnameVal: "Shyshko",
    });
    expect(nameVerify("some", "owner")).toEqual({
      status: true,
      nameVal: "some",
      surnameVal: "owner",
    });
  });

  test("false results", () => {
    expect(nameVerify("1max", "2shyshko")).toEqual({
      status: false,
      nameVal: "",
      surnameVal: "",
    });
  });
});
