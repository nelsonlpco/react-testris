import React, { useContext, useEffect } from 'react';
import { GameContext } from 'store';
import { addPointsAction } from 'store/GameContext';
import BoardContainer from './styles';

const Board: React.FC = () => {
  const {
    state: { points },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    dispatch(addPointsAction(2));
  }, []);

  return <BoardContainer>{points}</BoardContainer>;
};

export default Board;
