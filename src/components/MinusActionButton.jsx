import React from 'react';

function MinusActionButton({ onActionClick, accessibilityLabel = 'Lower climate value' }) {
  return (
    <button onClick={onActionClick} aria-label={accessibilityLabel}>
      -
    </button>
  );
}

export default MinusActionButton;
