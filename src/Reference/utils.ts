export function caculateWinner(squares: Array<'X' | 'O' | ''>, length: number): 'X' | 'O' | '' {
  const lines: Array<Array<number>> = makeLines(length);

  for (const line of lines) {
    const isWinner: boolean = line.reduce((prev, curr) => {
      if (squares[prev] && squares[prev] === squares[curr]) {
        return curr;
      }
      return -1;
    }) === -1 ? false : true;
    if (isWinner && ['X', 'O'].includes(squares[line[0]])) {
      console.log("winner winner chicken dinner");
      return squares[line[0]];
    }
  }
  return '';
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

export function getClicked(squares: Array<'X' | 'O' | ''>): number {
  return squares.reduce((prev, curr) => {
    return curr ? prev + 1 : prev;
  }, 0);
}
