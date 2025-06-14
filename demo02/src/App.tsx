// import HelloWorld from './components/HelloWorld';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h2>React + TypeScript Project</h2>
//       <HelloWorld name="Alice" age={25} />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const defaultSquareValue = '';
function Square({value = defaultSquareValue, onSquareClick}: {value: string, onSquareClick: () => void}) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {

  const [isNextState, setIsNextState] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(defaultSquareValue));
  
  function handleClick(index: number) {
    const newSquares : string[] = squares.slice();

    if(newSquares[index] || calculateWinner(newSquares))
      return;

    newSquares[index] = isNextState ? 'X' : 'O';

    setSquares(newSquares);
    setIsNextState(!isNextState);
  }

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
  }

  let status : string;
  const winner = calculateWinner(squares);
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isNextState ? 'X' : 'O');
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    
  );
}