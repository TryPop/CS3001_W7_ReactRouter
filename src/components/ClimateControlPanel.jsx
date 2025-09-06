import React from 'react';
import PlusActionButton from './PlusActionButton';
import MinusActionButton from './MinusActionButton';

function ClimateControlPanel({ onValueIncrease, onValueDecrease }) {
  return (
    <div className="climate-control-panel">
      <MinusActionButton onActionClick={onValueDecrease} />
      <PlusActionButton onActionClick={onValueIncrease} />
    </div>
  );
}

export default ClimateControlPanel;
