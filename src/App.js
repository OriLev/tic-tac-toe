import React, { useState } from 'react';
import Board from './components/Board';
import { PLAYER_1, PLAYER_2 } from './consts';
import './App.css';

function App() {
  
  const [boardData, updateBoard] = useState(Array(9).fill(null));
  const [currentPlayer, changeCurrentPlayer] = useState(PLAYER_1);
  const [winningCells, setWinningCells] = useState([]);
  const [hasGameEnded, setGameEnded] = useState(false);

  const togglePlayer = () => changeCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  const submitPlay = cell => {
    const newData = boardData;
    newData[cell] = currentPlayer;
    updateBoard(newData);
    const winningCells = checkWin();
    if (winningCells.length === 0 && newData.includes(null)) {
      togglePlayer();
    } else {
      setWinningCells(winningCells);
      setGameEnded(true);
    }
  }
  const checkWin = () => {
    const rowsWinner = checkRows();
    const columnsWinner = checkColumns();
    const diagonalsWinner = checkDiagonals();
    return [ ...rowsWinner, ...columnsWinner, ...diagonalsWinner ];
  }
  const checkRows = () => {
    for (let i = 0; i < 3; i++) {
      const firstCellNum = i * 3;
      if (boardData[firstCellNum]) {
        if (boardData[firstCellNum] === boardData[firstCellNum + 1] && boardData[firstCellNum] === boardData[firstCellNum + 2]) {
          return [firstCellNum, firstCellNum + 1, firstCellNum + 2];
        }
      }
    }
    return [];
  }
  
  const checkColumns = () => {
    for (let i = 0; i < 3; i++) {
      const firstCellNum = i;
      if (boardData[firstCellNum]) {
        if (boardData[firstCellNum] === boardData[firstCellNum + 3] && boardData[firstCellNum] === boardData[firstCellNum + 6]) {
          return [firstCellNum, firstCellNum + 3, firstCellNum + 6];
        }
      }
    }
    return [];
  }

  const checkDiagonals = () => {
      if (boardData[0] && boardData[0] === boardData[4] && boardData[0] === boardData[8]) {
        return [0, 4, 8];
      }
      if (boardData[2] && boardData[2] === boardData[4] && boardData[0] === boardData[8]) {
        return [2, 4, 6];
      }
    return [];
  }

  

  const currentPlayerString = currentPlayer.split('_').join(' ').toUpperCase();
  const getEndGameString = () => winningCells.length === 0 ? 'Draw' : `Congratulations ${currentPlayerString}, you won!!!`
  const headerString = hasGameEnded ? getEndGameString() : `${currentPlayerString} please play`;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{headerString}</h1>
      </header>
      <main className="gameContainer">
        <Board boardData={boardData} winningCells={winningCells} submitPlay={submitPlay} />
      </main>
    </div>
  );
}

export default App;
