import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => console.log('first button')),
      switchMap(() => this.actions$.pipe(
        ofType(UserActions.loadUsersSuccess),
        tap(() => console.log('2nd button')))
      ),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserActions.loadUsersSuccess({ data })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
