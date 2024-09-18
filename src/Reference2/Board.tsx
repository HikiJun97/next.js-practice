import React from 'react'
import { useState, useEffect } from 'react'
import Square from './Square'
import { caculateWinner, getClicked } from './utils.ts'
import "./Board.css"

type Squares = Array<'X' | 'O' | ''>;

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (squares: Squares) => void;
  boardSize?: number;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay, boardSize = 3 }) => {
  const initSquares: Squares = Array(boardSize ** 2).fill('');
  const [history, setHistory] = useState<Array<Squares>>([initSquares]);

  function handleClick(i: number) {
    if (squares[i] || caculateWinner(squares, boardSize)) {
      return;
    }

    const nextSquares = [...squares]; // Copy the array for Immutability
    // const nextSquares = squares.slice();
    // const nextSquares = Array.from(squares);
    // const nextSquares = squares.map(x => x);
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner: 'X' | 'O' | '' = caculateWinner(squares, boardSize);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (squares.every(mark => ['X', 'O'].includes(mark))) {
    status = 'Tie';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">
        <b>{status}</b>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[...Array(boardSize)].map((_, i) => (
          <div className="board-row">
            {[...Array(boardSize)].map((_, j) => (
              <Square value={squares[boardSize * i + j]} length={boardSize} onSquareClick={squares[boardSize * i + j] ? () => { } : () => handleClick(boardSize * i + j)} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}


const Game: React.FC = () => {
  const [history, setHistory] = useState<Array<Squares>>([Array(9).fill('')]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game;
