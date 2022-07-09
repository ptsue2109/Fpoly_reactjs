import React from "react";

const Cell = ({ value, onClick, className,winner}) => {
  console.log({ value, onClick, className});

  return (
    <div className={`game-cell ${className}`}  onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;