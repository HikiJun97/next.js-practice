import React from 'react'
import TicTacToeSquare from './TicTacToeSquare.tsx'
import { useState, useEffect, useRef } from 'react'

type Player = 'X' | 'O';

const Board: React.FC = () => {
  const square_list: Array<React.RefObject<HTMLDivElement>> = [];

  for (let i = 0; i < 9; i++) {
    square_list.push(useRef<HTMLDivElement>(null));
  }

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const clickMark = (index: number) => {
    if (square_list[index].current!.innerText === '') {
      square_list[index].current!.innerText = currentPlayer;
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const bingoCase: Array<Array<number>> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const restart = () => {
    setWinner(null);
    [...Array(9)].map((_, i) => { square_list[i].current!.innerText = "" });
  }

  useEffect(() => {
    console.log("useEffect");
    for (const line of bingoCase) {
      let prev: string = square_list[line[0]].current!.innerText;
      let hit: number = 0;
      for (const index of line) {
        // console.log(index);
        const current: string = square_list[index].current!.innerText;
        console.log(prev, current);
        if (!prev || !current || prev !== current) {
          break;
        }
        if (prev === current) {
          prev = current;
          hit++;
          continue
        }
      }

      if (hit === 3) {
        setWinner(prev);
        break;
      }

      const isFull: boolean = [...Array(9)].every((_, i) => { return square_list[i].current!.innerText ? true : false })

      isFull && setWinner("Tie");
    }
  }, [currentPlayer]);

  return (
    <>
      <div>Winner: {winner}</div>
      <div className="board">
        {[...Array(9)].map((_, i) => {
          return <TicTacToeSquare key={i} ref={square_list[i]} onClick={winner ? () => { } : () => clickMark(i)} />
        })}
      </div>
      <button onClick={restart}>Restart</button>
    </>
  );
}

export default Board;
