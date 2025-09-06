import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimeSetter from "./TimeSetter";
import ControlButtons from "./ControlButtons";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const handleTimeChange = (type, value) => {
    if (type === "hours") setHours(value);
    if (type === "minutes") setMinutes(value);
    if (type === "seconds") setSeconds(value);
  };

  const handleStart = () => {
    if (timeLeft === 0) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        setTimeLeft(totalSeconds);
        setIsRunning(true);
        setIsCompleted(false);
      }
    } else {
      setIsRunning(true);
      setIsCompleted(false);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsCompleted(false);
  };

  const displayTime =
    timeLeft > 0 ? timeLeft : hours * 3600 + minutes * 60 + seconds;
  const isSetupDisabled = isRunning || timeLeft > 0;

  return (
    <div className="app">
      <div className="container">
        <h1>Countdown Timer</h1>

        {isCompleted && (
          <div className="completion-message">
            <h2>Time's Up!</h2>
          </div>
        )}

        <TimerDisplay timeLeft={displayTime} isRunning={isRunning} />

        <TimeSetter
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onTimeChange={handleTimeChange}
          disabled={isSetupDisabled}
        />

        <ControlButtons
          isRunning={isRunning}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          disabled={displayTime === 0}
        />
      </div>
    </div>
  );
};

export default Timer;