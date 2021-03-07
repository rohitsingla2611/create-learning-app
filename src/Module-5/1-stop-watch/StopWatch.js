import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    document.title = `TIME ${formattedTime}`;
  }, [time]);

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerActive]);

  const onStartStopClickHandler = () => {
    setTimerActive((c) => !c);
  };
  const onResetClickHandler = () => {
    setTimerActive(false);
    setTime(0);
  };

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);
  return (
    <section>
      <h1>STOP WATCH</h1>
      <h2>{formattedTime}</h2>
      <button
        type="button"
        onClick={onStartStopClickHandler}
        aria-pressed={timerActive}
      >
        START/PAUSE
      </button>
      <button type="button" onClick={onResetClickHandler}>
        RESET
      </button>
    </section>
  );
};

export default StopWatch;
