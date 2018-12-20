import { Component, Input, OnChanges, OnInit } from "@angular/core";

import { IJoke } from "../interfaces";
import { JokesService } from "../jokes.service";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.css"]
})
export class JokesComponent implements OnInit, OnChanges {
  @Input() num: number;
  public jokes: IJoke[] = [];

  constructor(public jokesService: JokesService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.jokesService.getJokes(this.num).subscribe(jokes => {
      this.jokes = jokes.value;
    });
  }
}
