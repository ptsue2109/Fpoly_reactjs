import React, { useState } from "react";
import { calculateWinner} from "../../utils/tictactoe";
import Board from "./Board";
import "./game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };


  return (
    <div className='app container'>
      <Board cells={board} onClick={handleClick}  winner={winner} ></Board>

      {winner && <div className="game-winner">Winner is  {board[winner[0]]}</div>}
      {!winner && board.flat().every((cell) => cell !== null) && <p>Không có người thắng</p>}

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;