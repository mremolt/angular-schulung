import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { CounterActionTypes } from "./counter.actions";

@Injectable()
export class CounterEffects {
  @Effect()
  loadCounters$ = this.actions$.pipe(ofType(CounterActionTypes.Increment));

  constructor(private actions$: Actions) {}
}
