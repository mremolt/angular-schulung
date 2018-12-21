import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosPageComponent } from "./todos-page/todos-page.component";

const routes: Routes = [{ path: "todos", component: TodosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
