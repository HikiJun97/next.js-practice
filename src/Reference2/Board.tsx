import React from 'react'
import { useState, useEffect } from 'react'
import Square from './Square'
import { caculateWinner, getClicked } from './utils.ts'
import "./Board.css"

type Squares = Array<'X' | 'O' | ''>;

interface BoardProps {
  boardSize: number;
}

const Board: React.FC<BoardProps> = ({ boardSize }) => {
  const initSquares: Squares = Array(boardSize ** 2).fill('');
  const [squares, setSquares] = useState<Squares>(initSquares);
  const [history, setHistory] = useState<Array<Squares>>([initSquares]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  useEffect(() => {
    setSquares(initSquares);
    setHistory([initSquares]);
    setXIsNext(true);
  }, [boardSize]);

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
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    setHistory([...history.slice(0, getClicked(squares)), nextSquares]);
  }

  function handleHistory(index: number) {
    const historyCopy = history[index];
    setSquares(historyCopy);
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

  // style={{ alignContent: "center", width: "fit-content", paddingLeft: "0.2rem" }}

  return (
    <>
      <div className="board-info">
        <b>{status}</b>
        <button onClick={() => {
          setSquares(initSquares)
          setHistory([initSquares])
        }}>Restart</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="board">
          {[...Array(boardSize)].map((_, i) => (
            <div className="board-row">
              {[...Array(boardSize)].map((_, j) => (
                <Square value={squares[boardSize * i + j]} length={boardSize} onSquareClick={squares[boardSize * i + j] ? () => { } : () => handleClick(boardSize * i + j)} />
              ))}
            </div>
          ))}
        </div>
        <div className="history-board">
          {history.map((squares, index) => {
            if (index === 0) {
              return <button onClick={() => { handleHistory(index) }}>Go to start</button>
            } else {
              return <button onClick={() => { handleHistory(index) }}>Go to #{index} move</button>
            }
          })}
        </div>
      </div>
    </>
  )
}


const Game: React.FC = () => {
  return (
    <div className="game">

      <Board boardSize={3} />
    </div>
  )
}


export default Board;
