import { createFeatureSelector, createSelector } from "@ngrx/store";

import { State } from "./todos.reducer";

export type TodosState = Readonly<{ todos: State }>;

export const selectTodosState = createFeatureSelector<State>("todos");

export const selectTodos = createSelector(
  [selectTodosState],
  state => {
    return state.todos;
  }
);
