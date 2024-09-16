import React from 'react';
import { forwardRef } from 'react';
import './TicTacToeSquare.css';

interface TicTacToeSquareProps {
  onClick: () => void;
}

const TicTacToeSquare = forwardRef<HTMLDivElement, TicTacToeSquareProps>(({ onClick }: TicTacToeSquareProps, ref) => {
  return (
    <div className="tic-tac-toe-square" onClick={onClick} ref={ref}>
    </div>
  );
});

export default TicTacToeSquare;
