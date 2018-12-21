import { CounterActionTypes, CounterActions } from "./counter.actions";

export type State = Readonly<{
  value: number;
}>;

export const initialState: State = {
  value: 0
};

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return { ...state, value: state.value + 1 };

    case CounterActionTypes.Decrement:
      return { ...state, value: state.value - 1 };

    case CounterActionTypes.Reset:
      return initialState;

    default:
      return state;
  }
}
