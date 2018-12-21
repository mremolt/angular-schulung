import { TodosActionTypes, TodosActions } from "./todos.actions";

export type Todo = Readonly<{
  id: number;
  text: string;
  isActive: boolean;
}>;

export type State = Readonly<{
  todos: Todo[];
}>;

export const initialState: State = {
  todos: [
    { id: 1, text: "Add TODOs!", isActive: false },
    { id: 2, text: "Add more TODOs!", isActive: true }
  ]
};

export function reducer(state = initialState, action: TodosActions): State {
  switch (action.type) {
    case TodosActionTypes.AddTodo:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: 42, text: action.payload, isActive: true }
        ]
      };

    case TodosActionTypes.ToggleTodo:
      let todos = state.todos.map(todo => {
        if (todo === action.payload) {
          return { ...todo, isActive: !todo.isActive };
        }
        return todo;
      });
      return { ...state, todos };

    default:
      return state;
  }
}
