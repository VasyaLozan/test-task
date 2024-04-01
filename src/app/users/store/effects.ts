import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from './actions'
import {UsersService} from "../services/users.service";


@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }

  getUserList$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getUserList),
    mergeMap(payload => this.usersService.getUserList(payload.date).pipe(
      map(data => actions.getUserListSuccess({data})),
      catchError(error => of(actions.getUserListError({error})))
    ))
  ))

}
