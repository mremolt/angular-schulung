import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  num = 3;

  constructor() {}

  ngOnInit() {}

  jokeFormSubmitted(numberOfJokes: number) {
    this.num = numberOfJokes;
  }
}
