import { createSelector } from "@ngrx/store";

import { State } from "..";

export function selectCounterState(state: State) {
  return state.counter;
}

export const selectCounterValue = createSelector(
  [selectCounterState],
  state => {
    return state.value;
  }
);
