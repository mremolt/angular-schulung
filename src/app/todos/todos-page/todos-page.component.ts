import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store, select } from "@ngrx/store";

import { AddTodo, ToggleTodo } from "../reducers/todos/todos.actions";
import { Todo } from "../reducers/todos/todos.reducer";
import { TodosState, selectTodos } from "../reducers/todos/todos.selectors";

@Component({
  selector: "app-todos-page",
  templateUrl: "./todos-page.component.html",
  styleUrls: ["./todos-page.component.css"]
})
export class TodosPageComponent implements OnInit {
  public todos: Todo[];
  public form: FormGroup;

  constructor(public store: Store<TodosState>) {
    this.form = new FormGroup({
      todo: new FormControl("")
    });
  }

  ngOnInit() {
    this.store.pipe(select(selectTodos)).subscribe(todos => {
      this.todos = todos;
    });
  }

  submitTodo() {
    console.log("adding", this.form.value.todo);
    this.store.dispatch(new AddTodo(this.form.value.todo));
    this.form.reset();
  }

  toggleTodo(todo: Todo) {
    console.log("toggle", todo);
    this.store.dispatch(new ToggleTodo(todo));
  }
}
