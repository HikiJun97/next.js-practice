import React from 'react'
import { useState } from 'react'
import "./Square.css"

interface SquareProps {
  value: string | null;
  // onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value }) => {
  const onSquareClick = () => {
  }

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square;
