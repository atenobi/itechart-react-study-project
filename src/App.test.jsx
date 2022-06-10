import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("With React Testing Library", () => {
  test('Shows "Hello"', () => {
    render(<App />)
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
