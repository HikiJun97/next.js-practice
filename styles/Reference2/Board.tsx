import React from 'react'
import Square from './Square'
import { getWinner, getBingoLine } from './utils'
import type { Player, Squares } from 'types/types'
import players from './players'
import "./Board.css"

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (squares: Squares, move: number) => void;
  boardSize: number;
}


const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay, boardSize }) => {
  const winner: Player = getWinner(squares, boardSize);
  const bingoLine: Array<number> | null = getBingoLine(squares, boardSize);

  function handleClick(i: number, winner: Player) {
    if (squares[i] || winner !== null) {
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
    onPlay(nextSquares, i);
  }

  //const [winner, bingoLine]: [Player, Array<number>] = caculateWinner(squares, boardSize);
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
            {[...Array(boardSize)].map((_, j) => {
              const index = boardSize * i + j;
              return <Square key={index} value={squares[index]} length={boardSize} onSquareClick={squares[index] ? () => { } : () => handleClick(index, winner)} isBingo={bingoLine ? bingoLine.includes(index) : false} />
            })}
          </div>
        ))}
      </div>
    </>
  )
}

export default Board;
