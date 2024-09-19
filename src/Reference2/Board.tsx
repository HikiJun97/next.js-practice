import React from 'react'
import Square from './Square'
import { caculateWinner } from './utils.ts'
import type { Player, Squares } from 'types/types.d.ts'
import "./Board.css"

const X: Player = 'X';
const O: Player = 'O';
const players: Array<Player> = [X, O];

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (squares: Squares) => void;
  boardSize: number;
}


const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay, boardSize }) => {

  function handleClick(i: number) {
    if (squares[i] || caculateWinner(squares, boardSize)) {
      return;
    }

    const nextSquares = [...squares]; // Copy the array for Immutability
    // const nextSquares = squares.slice();
    // const nextSquares = Array.from(squares);
    // const nextSquares = squares.map(x => x);
    if (xIsNext) {
      nextSquares[i] = players[0];
    } else {
      nextSquares[i] = players[1];
    }
    onPlay(nextSquares);
  }

  const winner: Player = caculateWinner(squares, boardSize);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (squares.every(mark => {
    players.includes(mark)
  })) {
    status = 'Tie';
  } else {
    status = 'Next player: ' + (xIsNext ? players[0] : players[1]);
  }

  return (
    <>
      <div className="status">
        <b>{status}</b>
      </div>
      <div className="board">
        {[...Array(boardSize)].map((_, i) => (
          <div key={i} className="board-row">
            {[...Array(boardSize)].map((_, j) => (
              <Square key={boardSize * i + j} value={squares[boardSize * i + j]} length={boardSize} onSquareClick={squares[boardSize * i + j] ? () => { } : () => handleClick(boardSize * i + j)} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Board;
