import React from 'react';

function PlusActionButton({ onActionClick, accessibilityLabel = 'Raise climate value' }) {
  return (
    <button onClick={onActionClick} aria-label={accessibilityLabel}>
      +
    </button>
  );
}

export default PlusActionButton;
