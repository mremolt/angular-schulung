import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodosActionTypes } from './todos.actions';

@Injectable()
export class TodosEffects {

  @Effect()
  loadTodoss$ = this.actions$.pipe(ofType(TodosActionTypes.LoadTodoss));

  constructor(private actions$: Actions) {}
}
