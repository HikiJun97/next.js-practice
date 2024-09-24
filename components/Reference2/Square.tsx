import React from 'react'
 import "@/styles/Reference2/Square.css"

interface SquareProps {
  value: string | null;
  length: number;
  onSquareClick: () => void;
  isBingo: boolean;
}

const Square: React.FC<SquareProps> = ({ value, length, onSquareClick, isBingo }) => {
  return (
    <button
      // className="bg-white border border-gray-400 text-black font-bold mr-[-1px] mt-[-1px] p-0 text-center box-border aspect-[1/1] select-none"
      className="square"
      style={{
        width: `${100 / length}%`,
        fontSize: `${10 / length}rem`,
        backgroundColor: isBingo ? '#3498db' : 'white',
        transition: 'background-color 0.2s ease'
      }}
      onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square;
