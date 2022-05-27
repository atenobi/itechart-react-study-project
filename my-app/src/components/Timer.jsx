import React, { useState, useEffect } from "react";

const Timer = () => {
    const [sec, setSec] = useState(0);
    let userSec = 0;

    const secondChangeFunc = (e) => {
        e.preventDefault();
        userSec += e.target.value;
    }

    useEffect(() => {
        setInterval(() => {
            if (userSec > 0) {
                setSec(userSec -= 1);
            }
        }, 1000);
      }, [sec, userSec]);

  return (
    <div className="timer-container">
      <label htmlFor="timer-hour">insert hours</label>
      <input type="number" placeholder="0" max={23} min={0} id="timer-hour" />

      <label htmlFor="timer-minute">minutes</label>
      <input type="number" placeholder="0" max={59} min={0} id="timer-minute" />

      <label htmlFor="timer-second">seconds</label>
      <input
        onChange={(e) => secondChangeFunc(e)}
        type="number"
        placeholder={sec}
        max={59}
        min={0}
        id="timer-second"
      />
    </div>
  );
};

export default Timer;
