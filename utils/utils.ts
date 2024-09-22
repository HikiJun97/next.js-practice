import type { Player, Squares } from '@/types/types';

export function getWinner(squares: Squares, length: number): Player {
  const bingoLine: Array<number> | null = getBingoLine(squares, length);
  if (bingoLine) {
    return squares[bingoLine[0]];
  }
  return null;
}

export function getBingoLine(squares: Squares, length: number): Array<number> | null {
  const bingoLines: Array<Array<number>> = makeLines(length);

  for (const bingoLine of bingoLines) {
    const isWinner: boolean = bingoLine.reduce((prev, curr) => {
      if (squares[prev] && squares[prev] === squares[curr]) {
        return curr;
      }
      return -1;
    }) === -1 ? false : true;
    if (isWinner) {
      return bingoLine;
    }
  }
  return null;
}

function makeLines(length: number): Array<Array<number>> {
  const lines: Array<Array<number>> = [];
  const crossLeft: Array<number> = [];
  const crossRight: Array<number> = [];

  for (let i = 0; i < length; i++) {
    lines.push([...Array(length)].map((_, j) => length * i + j));
    lines.push([...Array(length)].map((_, j) => i + length * j));
    crossLeft.push(i * (length + 1))
    crossRight.push((i + 1) * (length - 1))
  }

  lines.push(crossLeft);
  lines.push(crossRight);

  return lines
}

export function getClicked(squares: Squares): number {
  return squares.reduce((prev, curr) => {
    return curr ? prev + 1 : prev;
  }, 0);
}
