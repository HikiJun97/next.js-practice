import React from 'react'
import { useState } from 'react'
import "./Square.css"

interface SquareProps {
  value: string | null;
  length: number;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, length, onSquareClick }) => {
  return (
    <button className="square" style={{ width: `${100 / length}%`, fontSize: `${10 / length}rem` }} onClick={onSquareClick} > {value}</button >
  )
}

export default Square;
