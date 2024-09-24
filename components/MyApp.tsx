'use client'

// import MyButton from './MyButton'
// import MyBoard from './MyTicTacToe/Board'
//import "./Board.css"
// import RefBoard from './Reference/Board'
import Game from './Reference2/Game'
import { useReducer } from 'react'
import "@/styles/MyApp.css"

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

  const isRenderMyApp: boolean = false;
  return (
    <div className="my-app">
      <h3 className="number">{count}</h3>
      <div className="flex flex-row flex-wrap">
        <button className="number-button" onClick={() => dispatch("increment")}>Increment</button>
      </div>
      <div className="flex flex-row flex-wrap">
        <button className="number-button" onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
      <ul>{(isRenderMyApp && listItems)}</ul>
      <Game boardSize={count} />
    </div>
  )
}
