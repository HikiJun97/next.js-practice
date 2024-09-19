import Board from './Board';
import { useState, useEffect } from 'react'
import type { Squares } from 'types/types.d.ts';

interface GameProps {
  boardSize?: number;
}

const Game: React.FC<GameProps> = ({ boardSize = 3 }) => {
  const initSquares: Squares = Array(boardSize ** 2).fill('');
  const [history, setHistory] = useState<Array<Squares>>([initSquares]);
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

  useEffect(() => {
    setHistory([initSquares]);
    setCurrentMove(0);
  }, [boardSize]);

  const moves = history.map((_, move) => {
    let description;
    if (move === currentMove) {
      description = `You are at move #${move}`;
    } else if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    if (move === currentMove) {
      return (
        <li key={move}>
          <span>{description}</span>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <button key={move} onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    }
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} boardSize={boardSize} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game;
