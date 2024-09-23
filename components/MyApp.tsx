'use client'

import MyButton from './MyButton'
import { Button } from '@chakra-ui/react'
// import MyBoard from './MyTicTacToe/Board'
//import "./Board.css"
// import RefBoard from './Reference/Board'
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
    <div className="flex flex-col flex-wrap items-center m-auto justify-center mt-20">
      <h1>{count}</h1>
      <div>
        <MyButton name="Increment" onClick={() => dispatch("increment")} />
        <MyButton name="Decrement" onClick={() => dispatch("decrement")} />
      </div>
      <div className="flex flex-row flex-wrap">
        <Button colorScheme="blue" className="w-[10rem] py-2 px-4 text-base font-medium cursor-pointer transition-colors duration-300 my-1 block" onClick={() => dispatch("increment")}>Increment</Button>
      </div>
      <div className="flex flex-row flex-wrap">
        <Button colorScheme="blue" className="w-[10rem] py-2 px-4 text-base font-medium cursor-pointer transition-colors duration-300 my-1 block" onClick={() => dispatch("decrement")}>Decrement</Button>
      </div>
      <ul>{(isRenderMyApp && listItems)}</ul>
      {/* <div className="my-game"> */}
      {/*   <MyBoard /> */}
      {/* </div> */}
      {/* <div className="my-game"> */}
      {/*   <RefBoard boardSize={count} /> */}
      {/* </div> */}
      <div className="game">
        <Game boardSize={count} />
      </div>
    </div>
  )
}
