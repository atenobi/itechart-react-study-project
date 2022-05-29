import "./App.css";
import Clock from "./components/clock/Clock";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Clock />
      {/* Create a component that represents a simple timer. */}
      <Timer />
    </div>
  );
}

export default App;
