import Board from './Board';
import { useState, useEffect } from 'react'
import type { Squares } from 'types/types.d.ts';

interface GameProps {
  boardSize?: number;
}

const Game: React.FC<GameProps> = ({ boardSize = 3 }) => {
  const initSquares: Squares = Array(boardSize ** 2).fill('');
  const [history, setHistory] = useState<Array<[Squares, number]>>([[initSquares, -1]]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove][0];

  function handlePlay(nextSquares: Squares, nextMove: number) {
    const nextHistory: Array<[Squares, number]> = [...history.slice(0, currentMove + 1), [nextSquares, nextMove]];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  useEffect(() => {
    setHistory([[initSquares, -1]]);
    setCurrentMove(0);
  }, [boardSize]);

  const moves = history.map((log, move) => {
    const coordinate = log[1];
    let col, row;
    if (coordinate >= 0) {
      col = coordinate % boardSize + 1;
      row = Math.floor(coordinate / boardSize) + 1;
    }
    let description;
    if (move === currentMove) {
      description = `You are at move #${move} ${coordinate >= 0 ? `(${row}, ${col})` : ''}`;
    } else if (move > 0) {
      description = `Go to move #${move}  ${coordinate >= 0 ? `(${row}, ${col})` : ''}`;
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
        <div className="sort-buttons">
          <button onClick={() => setIsAscending(true)}>Ascending</button>
          <button onClick={() => setIsAscending(false)}>Descending</button>
        </div>
        <ol>{isAscending ? moves : [...moves].reverse()}</ol>
      </div>
    </div>
  )
}

export default Game;
