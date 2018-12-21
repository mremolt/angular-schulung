import { Action } from "@ngrx/store";

import { Todo } from "./todos.reducer";

export enum TodosActionTypes {
  AddTodo = "[Todos] Add Todo",
  ToggleTodo = "[Todos] Toggle Todo"
}

export class AddTodo implements Action {
  readonly type = TodosActionTypes.AddTodo;
  constructor(public payload: string) {}
}

export class ToggleTodo implements Action {
  readonly type = TodosActionTypes.ToggleTodo;
  constructor(public payload: Todo) {}
}

export type TodosActions = AddTodo | ToggleTodo;
