import "./App.css";
import BDClockName from "./components/BDClockName";
import BDClockInfo from "./components/BDClockInfo";
import BDClock from "./components/BDClock";

function App() {
  return (
    <div>
      <BDClockName></BDClockName>
      <BDClockInfo></BDClockInfo>
      <BDClock></BDClock>
    </div>
  );
}

export default App;
