import React, { useState } from 'react';
import ClimateValueDisplay from './ClimateValueDisplay';
import ClimateControlPanel from './ClimateControlPanel';

function Thermostat() {
  const [celsiusReading, setCelsiusReading] = useState(0);

  const handleTemperatureRaise = () => setCelsiusReading(currentTemp => currentTemp + 1);
  const handleTemperatureLower = () => setCelsiusReading(currentTemp => currentTemp - 1);

  const fahrenheitReading = (celsiusReading * 9) / 5 + 32;

  return (
    <div className="weather-management-hub">
      <h1>Weather Control System</h1>
      <ClimateValueDisplay celsiusValue={celsiusReading} fahrenheitValue={fahrenheitReading} />
      <ClimateControlPanel onValueIncrease={handleTemperatureRaise} onValueDecrease={handleTemperatureLower} />
    </div>
  );
}

export default Thermostat;