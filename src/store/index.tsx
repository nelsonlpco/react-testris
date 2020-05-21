import React, { useReducer, createContext } from 'react';
import { reducer, INITIAL_STATE, GameContextProperties } from './GameContext';

export const GameContext = createContext<any>(undefined);

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
