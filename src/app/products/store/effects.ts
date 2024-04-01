import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from './actions'
import {ProductsService} from "../services/products.service";


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }

  getProductList$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getProductList),
    mergeMap(() => this.productsService.getProductList().pipe(
      map(data => actions.getProductListSuccess({data})),
      catchError(error => of(actions.getProductListError({error})))
    ))
  ))

  getLazyProductList$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getLazyProductList),
    mergeMap(() => this.productsService.getProductList().pipe(
      map(data => actions.getLazyProductListSuccess({data})),
      catchError(error => of(actions.getLazyProductListError({error})))
    ))
  ))

}
