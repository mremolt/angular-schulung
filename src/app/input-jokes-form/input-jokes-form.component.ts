import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input-jokes-form",
  templateUrl: "./input-jokes-form.component.html",
  styleUrls: ["./input-jokes-form.component.css"]
})
export class InputJokesFormComponent implements OnInit {
  @Output() outFormSubmitted = new EventEmitter();
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      jokes: new FormControl(0)
    });
  }

  ngOnInit() {}

  formSubmitted(event: Event) {
    event.preventDefault();
    this.outFormSubmitted.emit(this.form.value.jokes);
  }
}
