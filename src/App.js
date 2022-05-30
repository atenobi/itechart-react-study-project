import React from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Timer from "./components/timer/Timer";
import CreditCard from "./components/creditCard/CreditCard";

function App() {
  return (
    <div className="App">
      <Clock />

      {/* Create a component that represents a simple timer. */}
      <Timer />

      {/* {Implement a control to input credit card information.} */}
      <CreditCard />
    </div>
  );
}

export default App;
