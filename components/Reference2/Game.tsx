import Board from './Board'
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react'
import type { Player, Squares } from '@/types/types'
import { getWinner } from '@/utils/utils'
import players from './players'
import "@/styles/Reference2/Game.css"

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

  useEffect(() => {
    setHistory([[initSquares, -1]]);
    setCurrentMove(0);
  }, [boardSize]);

  const moves = history.map((log, move) => getMoveLog(log, move, boardSize, currentMove, setCurrentMove));
  const winner: Player = getWinner(currentSquares, boardSize);

  return (
    <div className="container w-full flex flex-wrap justify-around space-x-4 lg:space-x-0">
      <div className="flex flex-col">
        <h3 className="block text-xl text-left font-bold">{getStatus(winner, xIsNext, currentSquares)}</h3>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner} boardSize={boardSize} />
      </div>
      <div className="buttons-container">
        <div className="sort-buttons flex flex-row flex-wrap">
          <Button className="sort-button" onClick={() => setIsAscending(true)}>Ascending</Button>
          <Button className="sort-button" onClick={() => setIsAscending(false)}>Descending</Button>
        </div>
        <ol className="history">{isAscending ? moves : [...moves].reverse()}</ol>
        {/* </div> */}
      </div>
    </div>
  )
}

function getStatus(winner: Player, xIsNext: boolean, squares: Squares): string {
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

  return status;
}

function getMoveLog(log: [Squares, number], move: number, boardSize: number, currentMove: number, setCurrentMove: (move: number) => void): React.ReactNode {
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
        <Button className="history-button" disabled>{description}</Button>
      </li>
    );
  } else {
    return (
      <li key={move}>
        <Button className="history-button" onClick={() => setCurrentMove(move)}>{description}</Button>
      </li>
    );
  }
}

export default Game;
