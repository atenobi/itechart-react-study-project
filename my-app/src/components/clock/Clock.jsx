import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  function getTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    return { currentTime };
  }

  return (
    <div>
      <h1>{`${time.currentTime}`}</h1>
    </div>
  );
};

export default Clock;
