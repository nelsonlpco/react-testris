import React from 'react';
import Board from 'components/board';
import GameContextProvider from 'store';

const Game: React.FC = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};

export default Game;
