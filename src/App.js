import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const miliSec = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minutes = Math.floor((time % 360000) / 6000);
  const hours = Math.floor(time / 360000);

  return (
    <div className="App">
      <div>
        <div>
          <h1>Timer</h1>
        </div>
        <div>
          {hours < 10 ? "0" + hours : hours} :{" "}
          {minutes < 10 ? "0" + minutes : minutes} :{" "}
          {seconds < 10 ? "0" + seconds : seconds} :{" "}
          {miliSec < 10 ? "0" + miliSec : miliSec}
        </div>
        <div>
          <button
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setRunning(false);
            }}
          >
            Pause
          </button>
        </div>
      </div>
      {/* <Home/> */}
    </div>
  );
}

export default App;
