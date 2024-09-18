import MyButton from './MyButton.tsx'
import MyBoard from './MyTicTacToe/Board.tsx'
//import "./Board.css"
import RefBoard from './Reference/Board.tsx'
import Game from './Reference2/Board.tsx'
import { useState, useEffect, useReducer, useRef } from 'react'
import "./App.css"


type Product = {
  title: string;
  id: number;
};

function reducer(count: number, action: string) {
  switch (action) {
    case 'increment':
      return count + 1;
    case 'decrement':
      if (count === 1) {
        return count;
      }
      return count - 1;
    default:
      return count;
  }
}

export default function MyApp() {
  const [count, dispatch] = useReducer(reducer, 1);

  const products: Array<Product> = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
  ];

  const listItems = products.map((product) =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  const isRenderMyApp: boolean = true;
  return (
    <>
      <h1>{count}</h1>
      <div>
        <MyButton count={count} name="Increment" onClick={() => dispatch("increment")} />
      </div>
      <div>
        <MyButton count={count} name="Decrement" onClick={() => dispatch("decrement")} />
      </div>
      <ul>{(isRenderMyApp && listItems)}</ul>
      <div className="game">
        <MyBoard />
      </div>
      <div className="game">
        <RefBoard boardSize={count} />
      </div>
      <div className="game">
        <Game />
      </div>
    </>
  )
}
