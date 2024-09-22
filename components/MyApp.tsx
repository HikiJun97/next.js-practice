'use client'

import MyButton from './MyButton'
import MyBoard from './MyTicTacToe/Board'
//import "./Board.css"
import RefBoard from './Reference/Board'
import Game from './Reference2/Game'
import { useReducer } from 'react'
import "@/styles/App.css"

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
  const [count, dispatch] = useReducer(reducer, 3);

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
      <div className="my-game">
        <MyBoard />
      </div>
      <div className="my-game">
        <RefBoard boardSize={count} />
      </div>
      <div className="game">
        <Game boardSize={count} />
      </div>
    </>
  )
}
