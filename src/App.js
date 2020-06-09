import React, { useState } from 'react';
import Board from './components/Board';
import { PLAYER_1, PLAYER_2 } from './consts';
import './App.css';

function App() {
  
  const [boardData, updateBoard] = useState(Array(9).fill(null));
  const [currentPlayer, changeCurrentPlayer] = useState(PLAYER_1);

  const togglePlayer = () => changeCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  const submitPlay = cell => {
    const newData = boardData;
    newData[cell] = currentPlayer;
    updateBoard(newData);
    // TODO: check for win
    togglePlayer();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Board boardData={boardData} submitPlay={submitPlay} />
      </header>
    </div>
  );
}

export default App;
