import React from "react";
import "./App.css";
// import Clock from "./components/clock/Clock";
// import Timer from "./components/timer/Timer";
import CreditCard from "./components/creditCard/CreditCard";
import YouTubeVideoSearch from "./components/YouTubeVideoSearch/YouTubeVideoSearch";

function App() {
  return (
    <div className="App">
      {/* element for testing react-test-lib */}
      <h1>test react</h1>
      
      {/* <Clock /> */}

      {/* Create a component that represents a simple timer. */}
      {/* <Timer /> */}

      {/* {Implement a control to input credit card information.} */}
      <CreditCard />

      {/* Create a web page using React and Redux where users can search for YouTube videos (display list results) using Youtube REST API. */}
      <YouTubeVideoSearch />

    </div>
  );
}

export default App;
