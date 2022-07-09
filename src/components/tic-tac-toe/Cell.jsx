import React from "react";

const Cell = ({ value, onClick, className, winner }) => {
  
  function setColor(_value) { if (winner) { return "#ccc" } else { return } }
  return (
    <div className={`game-cell ${className}`} style={{ backgroundColor: setColor(winner) }} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;