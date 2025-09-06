import React from "react";

export default function TimeSetter({
  hours,
  minutes,
  seconds,
  onTimeChange,
  disabled,
}) {
  const handleInputChange = (type, value) => {
    const numValue = Math.max(0, parseInt(value) || 0);

    let maxValue;
    switch (type) {
      case "hours":
        maxValue = 23;
        break;
      case "minutes":
      case "seconds":
        maxValue = 59;
        break;
      default:
        maxValue = 0;
    }

    const clampedValue = Math.min(numValue, maxValue);
    onTimeChange(type, clampedValue);
  };

  return (
    <div className="time-setter">
      <h3>Set Timer</h3>
      <div className="time-inputs">
        <div className="input-group">
          <label htmlFor="hours">Hours</label>
          <input
            id="hours"
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={(e) => handleInputChange("hours", e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="input-group">
          <label htmlFor="minutes">Minutes</label>
          <input
            id="minutes"
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => handleInputChange("minutes", e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="input-group">
          <label htmlFor="seconds">Seconds</label>
          <input
            id="seconds"
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => handleInputChange("seconds", e.target.value)}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

