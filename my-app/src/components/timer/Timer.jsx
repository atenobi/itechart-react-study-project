import React, { useState, useEffect } from "react";

const Timer = () => {
  let [secLeft, setSecLeft] = useState("");
  const [userSec, setUserSec] = useState("");
  const [isGoing, setIsGoing] = useState(false);

  const startTimer = () => {
    setIsGoing(true);
    setSecLeft(userSec);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isGoing && setSecLeft(secLeft >= 1 ? (secLeft -= 1) : 'Boom!');
    }, 1000);
    return () => clearInterval(interval);
  }, [userSec, secLeft]);

  return (
    <div className="timer-container">
      <label htmlFor="timer-second" className="timer-counter">
        {secLeft}
      </label>

      <input
        className="timer-input"
        onChange={(e) => setUserSec(e.target.value)}
        type="number"
        placeholder="insert seconds"
        id="timer-second"
      />

      <button className="timer-button" onClick={startTimer}>run timer</button>
    </div>
  );
};

export default Timer;
