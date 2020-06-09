import React from 'react';

import { PLAYER_SYMBOL } from '../consts';

import './style.css';

const Board = ({ boardData, winningCells, submitPlay }) => {
  return (
    <div className="boardContainer">
        {
          boardData.map((cellData, index) => {
            const isWinningCell = winningCells.includes(index);
            return (
              <div 
                key={cellData + index}
                className={`cell ${!cellData && 'active'} ${isWinningCell && 'winner'}`}
                onClick={cellData ? null : () => submitPlay(index)}
              >
                {cellData ? PLAYER_SYMBOL[cellData] : ''}
              </div>
            )
          })
        }
    </div>
  )
}

export default Board;