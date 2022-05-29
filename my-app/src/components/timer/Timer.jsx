import React, { useState, useEffect } from "react";

const Timer = () => {
  let [secLeft, setSecLeft] = useState("0");
  let [minLeft, setMinLeft] = useState("0");

  const [userSec, setUserSec] = useState("");

  const [isGoing, setIsGoing] = useState(false);

  const startTimer = () => {
    setSecLeft(0);
    setMinLeft(0);

    setIsGoing(true);

    if (userSec > 60) {
      setMinLeft(Math.floor(userSec / 60));
      setSecLeft(userSec - Math.floor(userSec / 60) * 60);
    }  else {
      setMinLeft(0);
      setSecLeft(userSec);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGoing && secLeft >= 1) {
        setSecLeft((secLeft -= 1));
      }

      if (!secLeft && minLeft !== 0) {
        setMinLeft(minLeft -= 1);
        setSecLeft(60);
      }

    }, 1000);
    return () => clearInterval(interval);
  }, [userSec, secLeft, minLeft]);

  return (
    <div className="timer-container">
      <label htmlFor="timer-second" className="timer-counter">
        {minLeft}:{secLeft}
      </label>

      <input
        className="timer-input"
        onChange={(e) => setUserSec(e.target.value)}
        type="number"
        placeholder="insert seconds"
        id="timer-second"
      />

      <button className="timer-button" onClick={startTimer}>
        run timer
      </button>
    </div>
  );
};

export default Timer;
