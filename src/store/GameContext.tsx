import { createContext } from 'vm';

type EnumLiteralsOf<T extends object> = T[keyof T];

export interface GameState {
  points: number;
}

type Action = { type: GameActionsTypes; payload: any };

const GameActions = {
  ADD_POINTS: 'ADD_POINTS',
};

type GameActionsTypes = EnumLiteralsOf<typeof GameActions>;

export const INITIAL_STATE: GameState = { points: 0 };

export const addPointsAction = (point: number): Action => ({
  type: GameActions.ADD_POINTS,
  payload: point,
});

export type GameContextProperties = {
  state: GameState;
  dispatch: React.Dispatch<Action>;
};

export const reducer = (state: GameState, action: Action) => {
  switch (action.type) {
    case GameActions.ADD_POINTS:
      return { ...state, points: action.payload };
    default:
      return state;
  }
};
