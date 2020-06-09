import React from 'react';

import { PLAYER_SYMBOL } from '../consts';

import './style.css';

const Board = ({ boardData, submitPlay }) => {
  return (
    <div className="boardContainer">
        {
          boardData.map((cellData, index) => {  
            return (
              <div 
                key={cellData + index}
                className="cell"
                onClick={() => submitPlay(index)}
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