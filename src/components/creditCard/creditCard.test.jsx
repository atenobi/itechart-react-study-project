import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../reducers/reducers";

import CreditCard from "./CreditCard";

describe("credit card render testing", () => {
  test('Shows "enter your card info"', () => {
    render(
      <Provider store={store}>
        <CreditCard />
      </Provider>
    );
    expect(screen.getByText("enter your card info")).toBeInTheDocument();
  });

  test("h1 - not null", () => {
    render(
      <Provider store={store}>
        <CreditCard />
      </Provider>
    );
    expect(screen.getByText("enter your card info")).not.toBeNull();
  });
});
