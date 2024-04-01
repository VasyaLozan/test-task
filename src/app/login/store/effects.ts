import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from './actions'
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }

  logIn$ = createEffect(() => this.actions$.pipe(
    ofType(actions.logIn),
    mergeMap(data => this.authService.logIn(data).pipe(
      map(auth => {
        this.router.navigate(['products']).then()
        return actions.logInSuccess({auth})
      }),
      catchError(error => of(actions.logInError({error})))
    ))
  ))

  logOut$ = createEffect(() => this.actions$.pipe(
    ofType(actions.logOut),
    mergeMap(() => this.authService.logOut().pipe(
      map(auth => {
        this.router.navigate(['login']).then()
        return actions.logOutSuccess({auth})
      }),
      catchError(error => of(actions.logOutError({error})))
    ))
  ))

}
