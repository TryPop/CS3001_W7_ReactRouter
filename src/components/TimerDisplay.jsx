import React from "react";

export default function TimerDisplay({ timeLeft, isRunning }) {
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={`timer-display ${isRunning ? "running" : ""}`}>
      <div className="time-segment">
        <span className="time-value">{hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="time-separator">:</div>
      <div className="time-segment">
        <span className="time-value">{minutes}</span>
        <span className="time-label">Minutes</span>
      </div>
      <div className="time-separator">:</div>
      <div className="time-segment">
        <span className="time-value">{seconds}</span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
}

