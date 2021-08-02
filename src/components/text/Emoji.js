import React from 'react';

const Emoji = ({ label, symbol, size }) => {
  return (
    <span className="emoji" style={size ? { fontSize: size + 'px' } : null} role="img" aria-label={label ? label : ""} aria-hidden={label ? "false" : "true"}>
      {symbol}
    </span>
  );
};

export default Emoji;