import React from "react";

function ControlButtons({ isRunning, onStart, onPause, onReset, disabled }) {
  return (
    <div className="control-buttons">
      {!isRunning ? (
        <button className="btn btn-start" onClick={onStart} disabled={disabled}>
          Start
        </button>
      ) : (
        <button className="btn btn-pause" onClick={onPause}>
          Pause
        </button>
      )}
      <button className="btn btn-reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;

