import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { State } from "../reducers";
import { Decrement, Increment } from "../reducers/counter/counter.actions";
import { selectCounterValue } from "../reducers/counter/counter.selectors";

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.css"]
})
export class Page2Component implements OnInit {
  counter: number;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    // this.store.subscribe(state => {
    //   this.counter = state.counter.value;
    // });

    this.store.pipe(select(selectCounterValue)).subscribe(value => {
      this.counter = value;
      console.log(value);
    });

    this.store.dispatch(new Increment());

    setTimeout(() => {
      this.store.dispatch(new Increment());
    }, 1000);

    setTimeout(() => {
      this.store.dispatch(new Increment());
    }, 2000);

    setTimeout(() => {
      this.store.dispatch(new Decrement());
    }, 5000);
  }
}
