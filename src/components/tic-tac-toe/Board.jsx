import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  console.log('Board',props);
  return (
    <div className="game-board">
      {console.log(props.cells)}
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          winner = {props.winner}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;