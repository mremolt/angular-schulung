import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { InputJokesFormComponent } from "./input-jokes-form/input-jokes-form.component";
import { JokesComponent } from "./jokes/jokes.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { TodosModule } from "./todos/todos.module";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    JokesComponent,
    InputJokesFormComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
