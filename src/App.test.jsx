import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("With React Testing Library", () => {
  test('Shows "test react"', () => {
    render(<App />)
    expect(screen.getByText("test react")).toBeInTheDocument();
  });

  test('h1 - not null', () => {
    render(<App />)
    expect(screen.getByText("test react")).not.toBeNull();
  });
});
