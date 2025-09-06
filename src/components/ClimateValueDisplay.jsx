import React from 'react';

function ClimateValueDisplay({ celsiusValue, fahrenheitValue }) {
  return (
    <div className="climate-value-display">
      <h2>Climate Reading</h2>
      <p>{celsiusValue}°C</p>
      <p>{fahrenheitValue}°F</p>
    </div>
  );
}

export default ClimateValueDisplay;
