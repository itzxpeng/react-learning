
import React, { useState } from 'react';
import Board from './App';

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  //...
}