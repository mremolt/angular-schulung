import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { TodosEffects } from "./reducers/todos/todos.effects";
import * as fromTodos from "./reducers/todos/todos.reducer";
import { TodosPageComponent } from "./todos-page/todos-page.component";
import { TodosRoutingModule } from "./todos-routing.module";

@NgModule({
  declarations: [TodosPageComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature("todos", fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
    ReactiveFormsModule
  ]
})
export class TodosModule {}
