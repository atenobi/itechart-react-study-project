import "./App.css";
import Clock from "../src/components/Clock";
import Timer from "../src/components/Timer";

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
