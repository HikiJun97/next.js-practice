import MyButton from './MyButton.tsx'
import Board from './Board.tsx'
import "./Board.css"
import RefBoard from './reference-tic-tac-toe/Board.tsx'
import { useState, useEffect, useReducer, useRef } from 'react'
import "./App.css"


type Product = {
  title: string;
  id: number;
};

function reducer(state: number, action: string) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

export default function MyApp() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

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
        <Board />
      </div>
      <div className="game">
        <RefBoard />
      </div>
    </>
  )
}
