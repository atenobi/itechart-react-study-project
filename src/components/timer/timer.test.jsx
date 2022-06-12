import React from "react";
import { render, screen } from "@testing-library/react";

import Timer from "./Timer";

// input
describe("test timer component input", () => {
  test("input is rendered?", () => {
    render(<Timer />);
    expect(screen.getByPlaceholderText("insert seconds")).toBeInTheDocument();
  });

  test("input - not null", () => {
    render(<Timer />);
    expect(screen.getByPlaceholderText("insert seconds")).not.toBeNull();
  });
});

//   button
describe("test timer component button", () => {
  test("button is rendered?", () => {
    render(<Timer />);
    expect(screen.getByText("run timer")).toBeInTheDocument();
  });

  test("button - not null", () => {
    render(<Timer />);
    expect(screen.getByText("run timer")).not.toBeNull();
  });

  test("button - have className", () => {
    render(<Timer />);
    expect(screen.getByRole("button")).toHaveClass("timer-button");
  });
});
